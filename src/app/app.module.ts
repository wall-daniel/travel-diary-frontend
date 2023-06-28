import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelEntryListComponent } from './travel-entry-list/travel-entry-list.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './services/auth.service';
import { TravelEntryService } from './services/travel-entry.service';
import { CreateTravelEntryComponent } from './create-travel-entry/create-travel-entry.component';
import { TravelEventDetailsComponent } from './travel-event-details/travel-event-details.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelEntryListComponent,
    LoginComponent,
    CreateTravelEntryComponent,
    TravelEventDetailsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    TravelEntryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
