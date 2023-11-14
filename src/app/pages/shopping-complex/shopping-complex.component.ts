import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

interface Data {
  id: Number;
  name: String;
  location: String;
  totalStores: String;
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
    FormsModule
  ],
  templateUrl: './shopping-complex.component.html',
  styleUrl: './shopping-complex.component.css'
})
export class ShoppingComplexComponent implements OnInit {
  public getData: Data[] = [];
  public id: Number = 0;
  public name: String = '';
  public location: String = '';
  public totalStores: String = '';
  selectedRowData: any;


  ngOnInit() {
    this.getShoppingComplex();
  }

  public async getShoppingComplex() {
    try {
      const response = await axios.get('https://localhost:8080/api/ShoppingComplex');
      this.getData = response.data;
    } catch (error) { }
  }

  async save() {
    let req = {
      id: this.id,
      name: this.name,
      location: this.location,
      totalStores: this.totalStores,
    }
    try {
      await axios.post("https://localhost:8080/api/ShoppingComplex", req);
      this.getShoppingComplex();
    } catch (error) { }
  }
  async delete() {
    let req = {
      id: this.id,
      name: this.name,
      location: this.location,
      totalStores: this.totalStores,
    }
    try {
      await axios.post(`https://localhost:8080/api/ShoppingComplex/delete?shoppingComplexId=${req.id}`);
      this.getShoppingComplex();
    } catch (error) { }
  }
  async update() {
    let req = {
      id: this.id,
      name: this.name,
      location: this.location,
      totalStores: this.totalStores,
    }
    try {
      await axios.put("https://localhost:8080/api/ShoppingComplex", req);
      this.getShoppingComplex();
    } catch (error) { }
  }

  onRowSelect(dataItem: any): void {
    this.selectedRowData = dataItem;
    this.id = dataItem.id;
    this.name = dataItem.name;
    this.location = dataItem.location;
    this.totalStores = dataItem.totalStores;
  }
  clear(){
    this.id = 0;
    this.name = '';
    this.location = '';
    this.totalStores = '';
  }
}
