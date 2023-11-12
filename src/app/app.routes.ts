import { Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FinancialTransactionComponent } from './pages/financial-transaction/financial-transaction.component';
import { MaintenanceContractComponent } from './pages/maintenance-contract/maintenance-contract.component';
import { ShoppingComplexComponent } from './pages/shopping-complex/shopping-complex.component';
import { StoreComponent } from './pages/store/store.component';

export const routes: Routes = [
    {
        path:'',
        component:RegistrationComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'financial-transaction',
        component:FinancialTransactionComponent
    },
    {
        path:'maintenance-contract',
        component:MaintenanceContractComponent
    },
    {
        path:'shopping-complex',
        component:ShoppingComplexComponent
    },
    {
        path:'store',
        component:StoreComponent
    },
    {
        path:'**',
        component:NotfoundComponent
    }
];
