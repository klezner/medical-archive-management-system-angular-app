import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PatientComponent} from './components/patient/patient.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {PatientService} from "./shared/services/patient.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
