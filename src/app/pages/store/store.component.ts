import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavbarComponent } from '../../components/sidenavbar/sidenavbar.component';
import { TopnavbarComponent } from '../../components/topnavbar/topnavbar.component';


@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule,SidenavbarComponent,TopnavbarComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

}
