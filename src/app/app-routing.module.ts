import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TravelEntryListComponent } from './travel-entry-list/travel-entry-list.component';
import { CreateTravelEntryComponent } from './create-travel-entry/create-travel-entry.component';
import { TravelEventDetailsComponent } from './travel-event-details/travel-event-details.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'travel-entries', component: TravelEntryListComponent },
  { path: 'travel-entries/:id', component: TravelEventDetailsComponent },
  { path: 'create-travel-entry', component: CreateTravelEntryComponent },
  { path: '**', redirectTo: 'travel-entries' } // Redirect invalid routes to travel-entries
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
