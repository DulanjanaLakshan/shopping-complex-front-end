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
  constructor(private messageService: MessageService) { }
  public async getUser() {
    try {
      const response = await axios.get("https://localhost:8080/api/User");
      this.getData = response.data;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    } catch (error) {
    }
  }
  public async save() {
    let req = {
      id: this.id,
      name: this.name,
      contact: this.contact,
      email: this.email,
      username: this.username,
      password: this.password,
    }

    try {
      const response = await axios.post("", req);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
      this.getUser();
    } catch (error) { }

  }
  public async update() {
    console.log("work");
    
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
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
}
