import { Component } from '@angular/core';
import { BrPipe } from '../../br.pipe';

@Component({
  selector: 'app-view-services',
  standalone: true,
  imports: [BrPipe],
  templateUrl: './view-services.component.html',
  styleUrl: './view-services.component.css'
})
export class ViewServicesComponent {
 title: string = 'Servicios';
  data:any[]=[{
    name:"Pladur - Revestimiento paredes"
  },
  {
    name:"Pintura en general"
  },
  {
    name:"Aislamiento acustico"
  },
  {
    name:"Alicatados"
  },
  {
    name:"Aislamientos por clima"
  }
  ]
}
