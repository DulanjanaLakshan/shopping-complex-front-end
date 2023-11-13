import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavbarComponent } from '../../components/sidenavbar/sidenavbar.component';
import { TopnavbarComponent } from '../../components/topnavbar/topnavbar.component';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SidenavbarComponent,
    TopnavbarComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
}
