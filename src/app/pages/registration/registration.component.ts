import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule
  ],
  styleUrls: ['./registration.component.css'],
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  username: string = ''; // Define the username property

  ngOnInit() {
    // You can perform any initialization logic here
  }
}
