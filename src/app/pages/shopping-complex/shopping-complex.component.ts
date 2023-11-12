import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavbarComponent } from '../../components/sidenavbar/sidenavbar.component';


@Component({
  selector: 'app-shopping-complex',
  standalone: true,
  imports: [CommonModule,SidenavbarComponent],
  templateUrl: './shopping-complex.component.html',
  styleUrl: './shopping-complex.component.css'
})
export class ShoppingComplexComponent {

}
