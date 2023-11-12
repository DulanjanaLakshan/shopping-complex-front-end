import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavbarComponent } from '../../components/sidenavbar/sidenavbar.component';
import { TopnavbarComponent } from '../../components/topnavbar/topnavbar.component';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,SidenavbarComponent,TopnavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
