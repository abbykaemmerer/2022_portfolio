import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  /** Desktop stacked portraits. Mobile uses portraitSrcMobile. */
  readonly portraitSrc = '/assets/img/headshots/trio.jpeg';
  readonly portraitSrcMobile = '/assets/img/headshots/me.JPG';
  readonly portraitAlt =
    'Abby in a cafe, looking up from a laptop.';

  readonly funFacts = [
    'May stop mid-conversation to identify a bug.',
    'Passionate about sunsets and sour candy',
    'Has an unreasonable amount of hometown pride for St. Louis.',
  ];
}
