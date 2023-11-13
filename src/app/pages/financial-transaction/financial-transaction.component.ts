import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavbarComponent } from '../../components/sidenavbar/sidenavbar.component';
import { TopnavbarComponent } from '../../components/topnavbar/topnavbar.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule, 
    SidenavbarComponent, 
    TopnavbarComponent, 
    TableModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    DropdownModule
  ],
  templateUrl: './financial-transaction.component.html',
  styleUrl: './financial-transaction.component.css'
})

export class FinancialTransactionComponent implements OnInit {
  cities: City[] | undefined;
  
  formGroup: FormGroup | undefined;

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];

      this.formGroup = new FormGroup({
          selectedCity: new FormControl<City | null>(null)
      });
  }
}
