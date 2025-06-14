import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  infoButton:string='Pide tu presupuesto';

  infoSection:any[]=[
    {
      img: 'image-4.jpg',
      width: '1366px',
  height: '400px',
      description: 'Somos lo que necesitas para Hacer Tus sueños Realidad'
    },
    {
      img: 'image-dos.jpg',
      width:'80%',
      height:'400px',
      description: 'Velamos 100% por cimplir tus necesidades Responsabilidad',
      descriptionDos:'Dedicacion y compromiso en Tiempos favorables'
    },
    {
      img: 'image-3.jpg',
      width:'80%',
      height:'400px',
      description: 'Te Ayudamos con toda nuestra experiencia para que tu proyecto supere tus expectativas',
      descriptionDos:'Cumpliremos siempre con tres metas propuestas'
    }
   
  ];
}
