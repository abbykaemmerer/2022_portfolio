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

    @media (max-width: 700px) {
      .controls {
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: stretch;
        gap: 0.55rem;
        margin: 0 0 1.5rem;
      }

      .controls .retro-btn {
        width: 100%;
        min-width: 0;
      }
    }
  `,
  template: `
    <nav class="controls" aria-label="Portfolio sections">
      <a
        class="retro-btn retro-btn--nav"
        routerLink="/resume"
        routerLinkActive="is-active"
      >Resume</a>
      <a
        class="retro-btn retro-btn--nav"
        routerLink="/portfolio/professional"
        routerLinkActive="is-active"
      >Professional Work</a>
      <a
        class="retro-btn retro-btn--nav"
        routerLink="/portfolio/personal"
        routerLinkActive="is-active"
      >Personal Projects</a>
    </nav>
  `,
})
export class PortfolioNav {}
