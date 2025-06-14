import { Component } from '@angular/core';
import { BrPipe } from '../../br.pipe';

@Component({
  selector: 'app-what-we-do',
  standalone: true,
  imports: [BrPipe],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.css'
})
export class WhatWeDoComponent {
  title: string = 'Lo que hacemos';
 description: string = 'Nuestros fuertes son el pladur , pintura, aislamientos acusticos, y todo lo relacionado con acabados, alicatados y\
  mucho mas';
}
