import { LecturerPageComponent } from './lecturer-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LecturerPageComponent,
    children: [
      {
        path: 'create-quiz',
        loadChildren: () => import('./create-quiz/create-quiz.module')
          .then(m => m.CreateQuizModule)
      },
      {
        path: '',
        redirectTo: 'create-quiz',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturerPageRoutingModule { }
