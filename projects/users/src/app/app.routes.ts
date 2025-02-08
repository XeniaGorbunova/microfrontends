import { Routes } from '@angular/router';
import {UserDashboardComponent} from './pages/user-dashboard/user-dashboard.component';
import {UserFormComponent} from './pages/user-form/user-form.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'dashboard',
    component: UserDashboardComponent
  },
  {
    path: 'form',
    component: UserFormComponent
  }
];
