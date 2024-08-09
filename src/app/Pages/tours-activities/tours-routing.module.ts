import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToursActivitiesComponent } from './tours-activities/tours-activities.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full', 
  //   redirectTo: '/home' 
  // },
  {
    path: '',
    component: ToursActivitiesComponent,
    children: [
      {
        path: '',
        // loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
    ]
  },
  // {
  //   path: '**',
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
