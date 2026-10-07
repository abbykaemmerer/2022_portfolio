import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Footer } from './footer/footer';
import { Header } from './header/header';

@Component({
  imports: [RouterOutlet, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly router = inject(Router);
  private skipInitialFocus = true;

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => {
        if (this.skipInitialFocus) {
          this.skipInitialFocus = false;
          return;
        }
        if (document.querySelector('[aria-modal="true"]')) return;
        window.setTimeout(() => focusPageHeading());
      });
  }
}

function focusPageHeading(): void {
  const main = document.getElementById('main');
  const heading = main?.querySelector<HTMLElement>('h1');
  const target = heading ?? main;
  if (!target) return;
  if (target.tabIndex < 0) target.tabIndex = -1;
  target.focus({ preventScroll: true });
}
