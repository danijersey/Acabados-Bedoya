import { Component } from '@angular/core';
import { BrPipe } from '../../br.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BrPipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 title: string = 'Contactanos';
 correo: string = 'Correo Electronico....';
 movil: any[] = [
  {phone:'+51 999999999'}
  ,{phone:'+51 999999999'}
];
}
