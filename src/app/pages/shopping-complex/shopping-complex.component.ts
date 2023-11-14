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
  Location: String;
  TotalStores: String;
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
  public Location: String = '';
  public TotalStores: String = '';



  ngOnInit() {
    this.getShoppingComplex();
  }

  public async getShoppingComplex() {
    try {
      const response = await axios.get('https://localhost:8080/api/ShoppingComplex');
      this.getData = response.data;
    } catch (error) { }
  }

  save() {
    let req = {
      id: this.id,
      name: this.name,
      Location: this.Location,
      TotalStores: this.TotalStores,
    }
    try {
      axios.post("https://localhost:8080/api/ShoppingComplex", req);
      this.getShoppingComplex();
    } catch (error) { }
  }
  delete() {
    throw new Error('Method not implemented.');
  }
  update() {
    throw new Error('Method not implemented.');
  }

}
