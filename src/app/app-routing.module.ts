import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientComponent} from "./components/patient/patient.component";
import {LocationComponent} from "./components/location/location.component";
import {ArchiveCategoryComponent} from "./components/archivecategory/archivecategory.component";

const routes: Routes = [
  {path: 'patients', component: PatientComponent},
  {path: 'locations', component: LocationComponent},
  {path: 'archivecategories', component: ArchiveCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
