import { Component } from '@angular/core';
import { PortfolioNav } from '../portfolio/portfolio-nav';

@Component({
  imports: [PortfolioNav],
  selector: 'app-resume',
  styleUrl: './resume.css',
  templateUrl: './resume.html',
})
export class Resume {
  readonly resumeHref = '/assets/AbbyKaemmerer_Resume_2026.pdf';
}
