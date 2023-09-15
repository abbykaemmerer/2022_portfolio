import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  public mobile: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth < 630){
      this.mobile = true;
    }
  }

}
