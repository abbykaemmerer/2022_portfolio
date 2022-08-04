import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public professionalClicked = false;
  public personalClicked = true;

  constructor() { }

  ngOnInit(): void {
  }

  goToProfessional(){
    this.professionalClicked = true;
    this.personalClicked = false;
  }

  goToPersonal(){
    this.personalClicked = true;
    this.professionalClicked = false;
  }

}
