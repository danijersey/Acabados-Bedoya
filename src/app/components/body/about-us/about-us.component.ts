import { Component } from '@angular/core';
import { BrPipe } from '../../br.pipe';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [BrPipe],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  title: string = 'Quienes somos';
 description: string = 'Nuestra expresión es 100% familiar, responsable, eficaz y comprometido con nuestros clientes.<br>\
  Pensando siempre en hacer lo mejor para ti, cumpliendo siempre con las metas establecidas.';
}
