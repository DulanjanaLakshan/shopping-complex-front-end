import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavbarComponent } from '../../components/sidenavbar/sidenavbar.component';
import { TopnavbarComponent } from '../../components/topnavbar/topnavbar.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import axios from 'axios';
import { FormsModule } from '@angular/forms';

interface MaintenanceContractData {
  id: number;
  agreement: string;
  payment: number;
  complexID: number;
}

interface ShoppingComplexData {
  id: number;
  name: string;
  location: string;
  totalStores: number;
}

interface CombinedData extends MaintenanceContractData {
  complex: string;
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
    FormsModule,
  ],
  templateUrl: './maintenance-contract.component.html',
  styleUrl: './maintenance-contract.component.css'
})
export class MaintenanceContractComponent implements OnInit {
  public getShoppingComplexData: ShoppingComplexData[] = [];
  public getData: CombinedData[] = [];
  public selectedComplex: Number = 0;
  public id: number = 0;
  public agreement: string = '';
  public payment: number = 0;
  public complexID: number = 0;

  ngOnInit() {
    this.getMaintenanceContract();
    this.getShoppingComplex()
  }

  public async getMaintenanceContract() {
    try {
      const responseMaintenanceContract = await axios.get<MaintenanceContractData[]>("https://localhost:8080/api/MaintenanceContract");
      const responseShoppingComplex = await axios.get<ShoppingComplexData[]>("https://localhost:8080/api/ShoppingComplex");

      this.getData = responseMaintenanceContract.data.map(maintenanceContract => {
        const shoppingComplex = responseShoppingComplex.data.find(complex => complex.id === maintenanceContract.complexID);
        return {
          ...maintenanceContract,
          complex: shoppingComplex ? shoppingComplex.name : 'Unknown Complex'
        };
      });

    } catch (error) { }
  }

  public async getShoppingComplex() {
    try {
      const response = await axios.get("https://localhost:8080/api/ShoppingComplex");
      this.getShoppingComplexData = response.data;
    } catch (error) { }
  }

  onShoppingComplexChange(selectedValue: any) {
    this.complexID = selectedValue
  }

  onRowSelect(dataItem: any) {
    console.log(dataItem);
    this.id = dataItem.id;
    this.agreement = dataItem.agreement;
    this.payment = dataItem.payment;
    this.complexID = dataItem.complexID;
  }

  async delete() {
    try {
      await axios.post(`https://localhost:8080/api/MaintenanceContract/delete?maintenanceContractId=${this.id}`);
      this.getMaintenanceContract();
    } catch (error) { }
  }

  async update() {
    let req = {
      id: this.id,
      agreement: this.agreement,
      payment: this.payment,
      complexID: this.complexID,
    }
    try {
      await axios.put("https://localhost:8080/api/MaintenanceContract", req);
      this.getMaintenanceContract();
    } catch (error) { }
  }

  async save() {
    let req = {
      id: this.id,
      agreement: this.agreement,
      payment: this.payment,
      complexID: this.complexID,
    }
    try {
      await axios.post("https://localhost:8080/api/MaintenanceContract", req);
      this.getMaintenanceContract();
    } catch (error) { }
  }
}
