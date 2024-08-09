import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full', 
  //   redirectTo: '/home' 
  // },
  {
    path: '',
    children: [
      {
        path: '',
        // loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
    ]
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
