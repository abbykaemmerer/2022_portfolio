import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  imports: [NgIf],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About implements OnInit {
  public mobile: boolean | undefined;

  ngOnInit(): void {
    if (window.innerWidth < 630) {
      this.mobile = true;
    }
  }
}
