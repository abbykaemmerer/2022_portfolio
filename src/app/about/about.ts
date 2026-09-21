import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  /** Swap this path to change the homepage portrait. */
  readonly portraitSrc = '/assets/img/headshots/trio.jpeg';
  readonly portraitAlt =
    'Three cafe portraits of Abby: looking up from a laptop, smiling at the camera, and working at a table.';

  readonly funFacts = [
    'May stop mid-conversation to identify a bug.',
    'Passionate about sunsets and sour candy',
    'Has an unreasonable amount of hometown pride for St. Louis.',
  ];
}
