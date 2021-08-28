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
import {WardComponent} from './components/ward/ward.component';
import {HospitalizationComponent} from './components/hospitalization/hospitalization.component';
import {StaffComponent} from './components/staff/staff.component';
import { FolderComponent } from './components/folder/folder.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    DashboardComponent,
    LocationComponent,
    ArchiveCategoryComponent,
    WardComponent,
    HospitalizationComponent,
    StaffComponent,
    FolderComponent
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
