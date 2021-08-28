import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientComponent} from "./components/patient/patient.component";
import {LocationComponent} from "./components/location/location.component";
import {ArchiveCategoryComponent} from "./components/archivecategory/archivecategory.component";
import {WardComponent} from "./components/ward/ward.component";
import {StaffComponent} from "./components/staff/staff.component";

const routes: Routes = [
  {path: 'patients', component: PatientComponent},
  {path: 'locations', component: LocationComponent},
  {path: 'archivecategories', component: ArchiveCategoryComponent},
  {path: 'wards', component: WardComponent},
  {path: 'staff', component: StaffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
