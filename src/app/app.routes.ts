import { Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

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
        path:'**',
        component:NotfoundComponent
    }
];
