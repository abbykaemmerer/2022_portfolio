import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Intro } from './intro';
import { IntroGate } from './intro-gate';

describe('IntroGate', () => {
  it('replays after a finished home visit, and ignores one trailing home event after skip', () => {
    const gate = new IntroGate();

    gate.sync('/');
    expect(gate.playing()).toBe(true);

    gate.hold();
    gate.sync('/');
    gate.close(true);
    expect(gate.playing()).toBe(false);

    gate.sync('/');
    expect(gate.playing()).toBe(true);

    gate.hold();
    gate.close(true);
    gate.sync('/');
    expect(gate.playing()).toBe(false);

    gate.sync('/contact');
    gate.sync('/');
    expect(gate.playing()).toBe(true);
  });
});

describe('Intro', () => {
  let fixture: ComponentFixture<Intro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Intro],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Intro);
    await fixture.whenStable();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('opens on the title', () => {
    const title = fixture.nativeElement.querySelector('h1');
    expect(title.textContent).toContain('Abby');
    expect(title.textContent).toContain('Kaemmerer');
  });
});
