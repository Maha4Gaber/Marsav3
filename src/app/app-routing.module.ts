import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToursActivitiesComponent } from './Pages/tours-activities/tours-activities.component';


const routes: Routes = [
  // {
  //   path: ':lang',
  //   // loadChildren: () => import(`./Pages/home/home.module`).then(m => m.HomeModule)
  // },
  {
    path: 'tour',
    loadChildren: () => import(`./Pages/tours-activities/tours.module`).then(m => m.ToursModule)
  },





  
  // {
  //   path: '**',
  //   co
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
