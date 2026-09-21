import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-portfolio-nav',
  styles: `
    .controls {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.65rem;
      margin: 0 0 2rem;
    }

    .controls .retro-btn {
      min-width: 11.5rem;
    }
  `,
  template: `
    <nav class="controls" aria-label="Portfolio sections">
      <a
        class="retro-btn"
        routerLink="/portfolio/professional"
        routerLinkActive="is-active"
      >Professional Work</a>
      <a
        class="retro-btn"
        routerLink="/portfolio/personal"
        routerLinkActive="is-active"
      >Personal Projects</a>
      <a
        class="retro-btn"
        routerLink="/resume"
        routerLinkActive="is-active"
      >Resume</a>
    </nav>
  `,
})
export class PortfolioNav {}
