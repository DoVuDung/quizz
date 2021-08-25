import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { QuizManagementComponent } from './quiz-management/quiz-management.component';
import { CreateQuizComponent } from './../create-quiz/create-quiz.component';

const routes: Routes = [
  {
    path: '',
    component: CreateQuizComponent,
    children: [
      {
        path: 'quiz-management',
        component: QuizManagementComponent
      },
      {
        path: '',
        redirectTo: 'quiz-management',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'quiz-management'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateQuizRoutingModule { }
