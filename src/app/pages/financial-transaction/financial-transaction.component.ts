import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavbarComponent } from '../../components/sidenavbar/sidenavbar.component';
import { TopnavbarComponent } from '../../components/topnavbar/topnavbar.component';


@Component({
  selector: 'app-financial-transaction',
  standalone: true,
  imports: [CommonModule,SidenavbarComponent,TopnavbarComponent],
  templateUrl: './financial-transaction.component.html',
  styleUrl: './financial-transaction.component.css'
})
export class FinancialTransactionComponent {

}
