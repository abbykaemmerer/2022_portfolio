import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [NgIf],
  selector: 'app-portfolio',
  styleUrl: './portfolio.css',
  templateUrl: './portfolio.html',
})
export class Portfolio {
  public professionalClicked = false;
  public personalClicked = true;

  goToProfessional() {
    this.professionalClicked = true;
    this.personalClicked = false;
  }

  goToPersonal() {
    this.personalClicked = true;
    this.professionalClicked = false;
  }
}
