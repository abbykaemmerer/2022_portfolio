import { Component, DestroyRef, ElementRef, HostListener, OnInit, computed, inject, signal, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IntroChoice, introQuestion, introStartId } from './intro-flow';
import { IntroGate } from './intro-gate';

type Phase = 'title' | 'question';
type Travel = 'up' | 'forward' | 'back';

@Component({
  selector: 'app-intro',
  styleUrl: './intro.css',
  templateUrl: './intro.html',
})
export class Intro implements OnInit {
  private readonly router = inject(Router);
  private readonly gate = inject(IntroGate);
  private readonly destroyRef = inject(DestroyRef);
  private readonly stageRef = viewChild<ElementRef<HTMLElement>>('stage');

  private readonly prefersReduced = prefersReducedMotion();
  private timer = 0;
  private animating = false;
  private closing = false;

  protected readonly phase = signal<Phase>('title');
  protected readonly questionId = signal(introStartId);
  protected readonly history = signal<string[]>([]);
  protected readonly selected = signal<string | null>(null);
  protected readonly motion = signal<'in' | 'out'>('in');
  protected readonly travel = signal<Travel>('up');
  protected readonly leaving = signal(false);

  protected readonly question = computed(() => introQuestion(this.questionId()));
  protected readonly questionKey = computed(() => [this.questionId()]);
  protected readonly stepLabel = computed(() => String(this.history().length + 1).padStart(2, '0'));
  protected readonly progress = computed(() => {
    if (this.leaving()) return 100;
    if (this.phase() === 'title') return 8;
    return this.history().length === 0 ? 46 : 78;
  });
  protected readonly announcement = computed(() =>
    this.phase() === 'title'
      ? 'Abby Kaemmerer. Front-end developer, curious person, former wildlife biologist.'
      : `Question ${this.history().length + 1}. ${this.question().prompt}`,
  );

  constructor() {
    this.destroyRef.onDestroy(() => this.clearTimer());
  }

  ngOnInit(): void {
    this.focusStage();
  }

  @HostListener('document:keydown', ['$event'])
  protected onKeydown(event: KeyboardEvent): void {
    if (this.closing) return;
    if (event.key === 'Tab') {
      this.trapTab(event);
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      this.skip();
      return;
    }
    const onButton = event.target instanceof HTMLElement && !!event.target.closest('button');
    if (onButton && (event.key === 'Enter' || event.key === ' ')) return;
    if (this.phase() === 'title') {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.begin();
      }
      return;
    }
    if (event.key === 'Backspace') {
      event.preventDefault();
      this.back();
      return;
    }
    const index = Number(event.key) - 1;
    const choice = this.question().choices[index];
    if (choice && event.key.length === 1) {
      event.preventDefault();
      this.choose(choice);
    }
  }

  protected onStageClick(event: MouseEvent): void {
    if (this.phase() !== 'title') return;
    const target = event.target;
    if (target instanceof Element && target.closest('.intro__chrome')) return;
    this.begin();
  }

  protected begin(): void {
    if (this.phase() !== 'title' || this.animating || this.closing) return;
    this.transition(() => {
      this.phase.set('question');
      this.questionId.set(introStartId);
      this.selected.set(null);
    }, 'up');
  }

  protected choose(choice: IntroChoice): void {
    if (this.animating || this.closing || this.selected()) return;
    this.clearTimer();
    this.selected.set(choice.id);
    this.timer = window.setTimeout(() => {
      if (choice.next) {
        const next = choice.next;
        this.transition(() => {
          this.history.update((steps) => [...steps, this.questionId()]);
          this.questionId.set(next);
          this.selected.set(null);
        }, 'forward');
        return;
      }
      this.finish(choice.route ?? '/', choice.fragment);
    }, this.ms(280));
  }

  protected back(): void {
    if (this.phase() !== 'question' || this.animating || this.closing) return;
    this.clearTimer();
    this.selected.set(null);
    const prev = this.history().at(-1);
    this.transition(() => {
      if (prev) {
        this.history.update((steps) => steps.slice(0, -1));
        this.questionId.set(prev);
      } else {
        this.phase.set('title');
      }
      this.selected.set(null);
    }, 'back');
  }

  protected skip(): void {
    this.finish('/');
  }

  private finish(route: string, fragment?: string): void {
    if (this.closing) return;
    this.closing = true;
    this.clearTimer();
    this.gate.hold();

    const reveal = () => {
      if (fragment) {
        document.getElementById(fragment)?.scrollIntoView({ block: 'start' });
      }
      this.leaving.set(true);
      this.timer = window.setTimeout(() => this.gate.close(route === '/'), this.ms(540));
    };

    if (route === '/' && !fragment) {
      reveal();
      return;
    }

    const extras = fragment ? { fragment } : undefined;
    void this.router.navigate([route], extras).finally(reveal);
  }

  private transition(apply: () => void, travel: Travel): void {
    this.clearTimer();
    this.animating = true;
    this.travel.set(travel);
    this.motion.set('out');
    this.timer = window.setTimeout(() => {
      apply();
      this.motion.set('in');
      this.animating = false;
      this.focusStage();
    }, this.ms(travel === 'up' ? 680 : 440));
  }

  private trapTab(event: KeyboardEvent): void {
    const root = this.stageRef()?.nativeElement;
    if (!root) return;
    const focusable = [...root.querySelectorAll<HTMLElement>('button:not(:disabled), a[href]')];
    if (focusable.length === 0) {
      event.preventDefault();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;
    const inside = active instanceof Node && root.contains(active);

    if (!inside) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
      return;
    }
    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
      return;
    }
    if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
      return;
    }
    if (active instanceof HTMLButtonElement && active.disabled) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    }
  }

  private focusStage(): void {
    window.setTimeout(() => {
      this.stageRef()?.nativeElement.querySelector<HTMLElement>('[data-focus]')?.focus({ preventScroll: true });
    });
  }

  private clearTimer(): void {
    if (this.timer) window.clearTimeout(this.timer);
    this.timer = 0;
  }

  private ms(duration: number): number {
    return this.prefersReduced ? 0 : duration;
  }
}

function prefersReducedMotion(): boolean {
  return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
