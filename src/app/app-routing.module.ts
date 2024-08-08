import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToursActivitiesComponent } from './Pages/tours-activities/tours-activities.component';



const routes: Routes = [
  {path: 'ToursActivities', component: ToursActivitiesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
