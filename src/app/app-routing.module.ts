import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';

const routes: Routes = [
  {
    path: 'landing',
    pathMatch: 'full',
    component: LandingPageComponent
  }, 
  {
    path : 'home',
    component: HomeComponent 
   },
   {
    path : 'view',
    component: ViewCustomerComponent 
   },
   {
    path : '',
    redirectTo: '/home',
    pathMatch: 'full'
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
