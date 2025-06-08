import { Component } from '@angular/core';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuSuperiorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
