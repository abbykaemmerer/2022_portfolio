import { NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  imports: [NgIf],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About implements OnInit {
  public mobile = false;

  ngOnInit(): void {
    this.updateMobile();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateMobile();
  }

  private updateMobile(): void {
    this.mobile = window.innerWidth < 630;
  }
}
