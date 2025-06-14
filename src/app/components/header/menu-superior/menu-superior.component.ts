import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-superior',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-superior.component.html',
  styleUrl: './menu-superior.component.css'
})
export class MenuSuperiorComponent {
menuAbierto = false;

routerDirection: any[] = [{
  name:'Lo que hacemos',
  url:'lo-que-hacemos'
},
{
  name:'Servicios',
  url:'servicios'
},
{
  name:'Contáctenos',
  url:'contactenos'
},
{
  name:'Quiénes somos',
  url:'/about-us'
}
];
}
