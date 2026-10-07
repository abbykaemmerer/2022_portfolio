import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class IntroGate {
  readonly playing = signal(false);

  /** Ignore route changes while the outro is on screen. */
  private holding = false;
  /** The finish navigation to `/` already happened during the hold. */
  private homeDuringHold = false;
  /** Swallow one trailing `/` event from a finish that never navigated. */
  private suppressHome = false;

  sync(path: string): void {
    const home = path === '/' || path === '';
    if (this.holding) {
      if (home) this.homeDuringHold = true;
      return;
    }
    if (!home) {
      this.suppressHome = false;
      this.playing.set(false);
      return;
    }
    if (this.suppressHome) {
      this.suppressHome = false;
      this.playing.set(false);
      return;
    }
    this.playing.set(true);
  }

  hold(): void {
    this.holding = true;
  }

  close(lockHome = false): void {
    this.holding = false;
    this.suppressHome = lockHome && !this.homeDuringHold;
    this.homeDuringHold = false;
    this.playing.set(false);
  }
}
