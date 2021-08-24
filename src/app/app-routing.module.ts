import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PatientComponent} from "./components/patient/patient.component";
import {LocationComponent} from "./components/location/location.component";

const routes: Routes = [
  {path: 'patients', component: PatientComponent},
  {path: 'locations', component: LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
