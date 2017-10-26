import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';
import { AnswerDashboardComponent } from './answer-dashboard/answer-dashboard.component';

const routes: Routes = [
    { path: 'index', 
    component: IndexComponent,
    pathMatch: 'full' 
    },
    {
      path: '',
      pathMatch: 'full',
      component: DashboardComponent,
      children: []
    },
    {
      path: 'new_question',
      pathMatch: 'full',
      component: NewQuestionComponent,
      children: []
  },
    {
      path: 'show_question/:id',
      pathMatch: 'full',
      component: AnswerDashboardComponent,
    },
    {
      path: 'new_answer/:id',
      pathMatch: 'full',
      component: NewAnswerComponent,
      children: []
    },

    { path: '**', redirectTo: 'index'}
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      RouterModule.forChild(routes)      
    ],
  exports: [RouterModule]
})

export class AppRoutingModule { }