import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioNav } from './portfolio-nav';

@Component({
  imports: [PortfolioNav, RouterOutlet],
  selector: 'app-portfolio',
  styleUrl: './portfolio.css',
  templateUrl: './portfolio.html',
})
export class Portfolio {}
