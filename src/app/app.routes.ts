import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { CarDataComponent } from './car-data/car-data.component';
import { ShowroomDataComponent } from './showroom-data/showroom-data.component';
import { LogDataComponent } from './log-data/log-data.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { HomeComponent } from './home/home.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { CarAccessoriesComponent } from './car-accessories/car-accessories.component';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'car-data', component: CarDataComponent },
  { path: 'showroom-data', component: ShowroomDataComponent },
  { path: 'log-data', component: LogDataComponent },
  { path: 'car-detail/:name', component: CarDetailComponent },
  {path: 'enquiry', component: EnquiryFormComponent},
  {path: 'car-accessories', component: CarAccessoriesComponent},
  {path: 'payment', component: PaymentComponent},
   { path: '', redirectTo: '/car-accessories', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};