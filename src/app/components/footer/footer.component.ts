import { Component } from '@angular/core';
import { ZoneDownComponent } from './zone-down/zone-down.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ZoneDownComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    
}
