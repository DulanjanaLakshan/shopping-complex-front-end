import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavbarComponent } from '../../components/sidenavbar/sidenavbar.component';
import { TopnavbarComponent } from '../../components/topnavbar/topnavbar.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import axios from 'axios';


interface FinancialData {
  id: number;
  amount: string;
  type: string;
  invoice: string;
  financialYear: number;
  complexID: number;
}

interface ShoppingComplexData {
  id: number;
  name: string;
  location: string;
  totalStores: number;
}

interface CombinedData extends FinancialData {
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
    FormsModule
  ],
  templateUrl: './financial-transaction.component.html',
  styleUrl: './financial-transaction.component.css'
})

export class FinancialTransactionComponent implements OnInit {
  
  public years: number[] = [];
  public getShoppingComplexData: ShoppingComplexData[] = [];
  public getData: CombinedData[] = [];

  selectedYear: any;

  public complexID: Number = 0;
  public complex: String = '';
  public id = 0;
  public amount = '';
  public type = '';
  public date = '';
  public invoice = '';
  public financialYear = '';
  public selectedComplex: Number = 0;

  selectedDate: Date;

  constructor() {
    this.selectedDate = new Date();
  }

  ngOnInit() {
    this.setYears();
    this.getFinancialTransaction();
    this.getShoppingComplex();
  }
  setYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year <= currentYear + 60; year++) {
      this.years.push(year);
    }
  }
  onYearChange(selectedValue: any) {
    this.financialYear = selectedValue;
  }

  public async getShoppingComplex() {
    try {
      const response = await axios.get("https://localhost:8080/api/ShoppingComplex");
      this.getShoppingComplexData = response.data;
    } catch (error) { }
  }

  public async getFinancialTransaction() {
    try {
      const responseFinancialTransaction = await axios.get<FinancialData[]>("https://localhost:8080/api/FinancialTransaction");
      const responseShoppingComplex = await axios.get<ShoppingComplexData[]>("https://localhost:8080/api/ShoppingComplex");
      this.getData = responseFinancialTransaction.data.map(financialTransaction => {
        const shoppingComplex = responseShoppingComplex.data.find(complex => complex.id === financialTransaction.complexID);
        return {
          ...financialTransaction,
          complex: shoppingComplex ? shoppingComplex.name : 'Unknown Complex'
        };
      });
    } catch (error) { }
  }

  onShoppingComplexChange(selectedValue: any) {
    this.complexID = selectedValue
  }

  async delete() {
    let req = {
      complexID: this.complexID,
      id: this.id,
      amount: this.amount,
      type: this.type,
      date: this.date,
      invoice: this.invoice,
      financialYear: this.financialYear,
    }
    try {
      await axios.post(`https://localhost:8080/api/FinancialTransaction/delete?financialTransactionId=${this.id}`)
      this.getFinancialTransaction();
      this.Clear();
    } catch (error) { }

  }
  async update() {
    let req = {
      complexID: this.complexID,
      id: this.id,
      amount: this.amount,
      type: this.type,
      date: this.date,
      invoice: this.invoice,
      financialYear: this.financialYear,
    }
    try {
      await axios.put('https://localhost:8080/api/FinancialTransaction', req)
      this.getFinancialTransaction();
      this.Clear();
    } catch (error) { }
  }
  async save() {
    let req = {
      complexID: this.complexID,
      id: this.id,
      amount: this.amount,
      type: this.type,
      date: this.date,
      invoice: this.invoice,
      financialYear: this.financialYear,
    }
    try {
      await axios.post('https://localhost:8080/api/FinancialTransaction', req)
      this.getFinancialTransaction();
      this.Clear();
    } catch (error) { }
  }
  Clear() {
    this.complexID = 0;
    this.complex = '';
    this.id = 0;
    this.amount = '';
    this.type = '';
    this.date = '';
    this.invoice = '';
    this.financialYear = '';
    this.selectedComplex = 0;
  }
  onRowSelect(dataItem: any) {
    this.complexID = dataItem.complexID;
    this.complex = dataItem.complex;
    this.id = dataItem.id;
    this.amount = dataItem.amount;
    this.type = dataItem.type;
    this.date = dataItem.data;
    this.invoice = dataItem.invoice;
    this.financialYear = dataItem.financialYear;
    this.selectedComplex = dataItem.selectedComplex;
  }
}
