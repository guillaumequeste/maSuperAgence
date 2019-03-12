import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSigninComponent } from './admin/admin-signin/admin-signin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { SinglePropertyComponent } from './single-property/single-property.component';

const routes: Routes = [
  { path: 'admin/login', component: AdminSigninComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'property/:id', component: SinglePropertyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
