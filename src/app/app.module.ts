import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PatientComponent} from './components/patient/patient.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LocationComponent} from './components/location/location.component';
import {ArchiveCategoryComponent} from './components/archivecategory/archivecategory.component';
import {PatientService} from "./shared/services/patient.service";
import {LocationService} from "./shared/services/location.service";
import {ArchiveCategoryService} from "./shared/services/archivecategory.service";

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    DashboardComponent,
    LocationComponent,
    ArchiveCategoryComponent
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
  providers: [
    PatientService,
    LocationService,
    ArchiveCategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
