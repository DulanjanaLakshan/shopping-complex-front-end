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
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


interface Data {
  id: Number;
  name: String;
  contact: String;
  email: String;
  username: String;
  password: String;
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
    ToastModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [MessageService]
})
export class ProfileComponent implements OnInit {

  public getData: Data[] = [];

  public id: Number = 0;
  public name: String = '';
  public contact: String = '';
  public email: String = '';
  public username: String = '';
  public password: String = '';

  selectedRowData: any;


  ngOnInit() {
    this.getUser();
  }
  constructor(private messageService: MessageService, private cdr: ChangeDetectorRef) { }
  public async getUser() {
    try {
      const response = await axios.get("https://localhost:8080/api/User");
      this.getData = response.data;
      this.cdr.detectChanges();
    } catch (error) {
    }
  }

  public save() {
    let req = {
      id: this.id,
      name: this.name,
      contact: this.contact,
      email: this.email,
      username: this.username,
      password: this.password,
    }

    try {
      axios.post("https://localhost:8080/api/User", req);
      this.getUser();
      this.clear();
    } catch (error) { }

  }

  public update() {
    let req = {
      id: this.id,
      name: this.name,
      contact: this.contact,
      email: this.email,
      username: this.username,
      password: this.password,
    }

    try {
      axios.put("https://localhost:8080/api/User", req);
      this.getUser();
      this.clear();
    } catch (error) { }
  }

  public async delete() {
    let req = {
      id: this.id,
      name: this.name,
      contact: this.contact,
      email: this.email,
      username: this.username,
      password: this.password,
    }

    try {
      const response = await axios.delete(`https://localhost:8080/api/User/${req.id}`);
      this.getData = response.data;
      this.cdr.detectChanges();
      this.clear();
    } catch (error) { }
  }

  onRowSelect(dataItem: any): void {
    this.selectedRowData = dataItem;
    console.log(dataItem);
    this.id = dataItem.id;
    this.name = dataItem.name;
    this.contact = dataItem.contact;
    this.email = dataItem.email;
    this.username = dataItem.username;
    this.password = '';
  }
  private clear(){
    this.id = 0;
    this.name = '';
    this.contact ='';
    this.email = '';
    this.username = '';
    this.password = '';
  }
}
