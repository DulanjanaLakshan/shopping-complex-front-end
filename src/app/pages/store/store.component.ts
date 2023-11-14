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
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

interface StoreData {
  id: number;
  name: string;
  category: string;
  leaseAgreement: string;
  payment: number;
  complexID: number;
}

interface ShoppingComplexData {
  id: number;
  name: string;
  location: string;
  totalStores: number;
}

interface CombinedData extends StoreData {
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
    DropdownModule,
    FormsModule,
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit {
  public getShoppingComplexData: ShoppingComplexData[] = [];

  public id: Number = 0;
  public name: String = '';
  public category: String = '';
  public leaseAgreement: String = '';
  public payment: Number = 0;
  public complexID: Number = 0;
  public complex: String = '';
  
  public selectedComplex: Number=0;
  selectedRowData: any;

  ngOnInit() {
    this.getShoppingComplex();
    this.getStore();

  }

  public getData: CombinedData[] = [];

  public async getStore() {
    try {
      const responseStore = await axios.get<StoreData[]>("https://localhost:8080/api/Store");
      const responseShoppingComplex = await axios.get<ShoppingComplexData[]>("https://localhost:8080/api/ShoppingComplex");

      this.getData = responseStore.data.map(store => {
        const shoppingComplex = responseShoppingComplex.data.find(complex => complex.id === store.complexID);
        return {
          ...store,
          complex: shoppingComplex ? shoppingComplex.name : 'Unknown Complex'
        };
      });

    } catch (error) {}
  }
  public async getShoppingComplex() {
    try {
      const response = await axios.get("https://localhost:8080/api/ShoppingComplex");
      this.getShoppingComplexData = response.data;
    } catch (error) { }
  }

  save() {
    let req = {
      id: this.id,
      name: this.name,
      category: this.category,
      leaseAgreement: this.leaseAgreement,
      payment: this.payment,
      complexID: this.complexID,
    }
    try {
      axios.post("https://localhost:8080/api/Store", req);
      this.getStore();
    } catch (error) { }
  }
  delete() {
    try {
      axios.delete(`https://localhost:8080/api/Store/${this.id}`);
      this.getStore();
    } catch (error) { }
  }
  update() {
    let req = {
      id: this.id,
      name: this.name,
      category: this.category,
      leaseAgreement: this.leaseAgreement,
      payment: this.payment,
      complexID: this.complexID,
    }
    try {
      axios.put("https://localhost:8080/api/Store", req);
      this.getStore();
    } catch (error) { }
  }

  onShoppingComplexChange(selectedValue: any) {
      this.complexID = selectedValue 
  }

  onRowSelect(dataItem: any) {
    console.log(dataItem);
    this.id= dataItem.id;
    this.name= dataItem.name;
    this.category= dataItem.category;
    this.leaseAgreement= dataItem.leaseAgreement;
    this.payment= dataItem.payment;
    this.complexID= dataItem.complexID;
  }
}
