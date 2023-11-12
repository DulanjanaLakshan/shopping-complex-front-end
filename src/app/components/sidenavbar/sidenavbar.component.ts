import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-sidenavbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenavbar.component.html',
  styleUrl: './sidenavbar.component.css'
})
export class SidenavbarComponent {
  fileList: any[] = [
    {
      name: 'Dashboard',
      icon: 'pi pi-home',
      path: 'dashboard',
    },
    {
      name: 'Shopping Complex',
      icon: 'pi pi-shopping-cart',
      path: 'shopping-complex',
    },
    {
      name: 'Store',
      icon: 'pi pi-shopping-bag',
      path: 'store',
    },
    {
      name: 'Maintenance Contract',
      icon: 'pi pi-money-bill',
      path: 'maintenance-contract',
    },
    {
      name: 'Financial Transaction',
      icon: 'pi pi-money-bill',
      path: 'financial-transaction',
    },
    {
      name: 'Profile',
      icon: 'pi pi-users',
      path: 'dashboard',
    },
  ];
}
