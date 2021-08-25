import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'lecturer-page',
        loadChildren: () => import('./lecturer-page/lecturer-page.module')
          .then(m => m.LecturerPageModule)
      },
      {
        path: '',
        redirectTo: 'lecturer-page',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'lecturer-page'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
