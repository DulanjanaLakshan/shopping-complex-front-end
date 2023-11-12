import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavbarComponent } from '../../components/sidenavbar/sidenavbar.component';



@Component({
  selector: 'app-maintenance-contract',
  standalone: true,
  imports: [CommonModule,SidenavbarComponent],
  templateUrl: './maintenance-contract.component.html',
  styleUrl: './maintenance-contract.component.css'
})
export class MaintenanceContractComponent {

}
