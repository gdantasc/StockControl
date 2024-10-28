import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { DashboardHomeComponent } from './page/dashboard-home/dashboard-home.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardHomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'dashboard',
    component: DashboardHomeComponent
  }
]
