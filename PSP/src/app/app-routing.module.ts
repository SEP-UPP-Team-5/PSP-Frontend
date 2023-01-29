import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PaymentMethodsComponent } from './pages/payment-methods/payment-methods.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';

const routes: Routes = [
  { path: "landing", component:  LandingPageComponent},
  { path: "subscriptions", component:  SubscriptionsComponent},
  { path: "methods/:id", component:  PaymentMethodsComponent},
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
