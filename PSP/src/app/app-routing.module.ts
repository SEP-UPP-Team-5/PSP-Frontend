import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SubscriptionTableComponent } from './pages/landing-page/subscription-table/subscription-table.component';

const routes: Routes = [
  { path: "landing", component:  LandingPageComponent},
  { path: "subscriptions", component:  SubscriptionTableComponent},
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
