import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http'; // <— Import
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

import { AppComponent } from './app.component';

import { TaskService } from './task.service'; // <-- Imported
import { AppRoutingModule } from './app-routing.module';
import { FilterPipePipe } from './filter-pipe.pipe';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';
import { AnswerDashboardComponent } from './answer-dashboard/answer-dashboard.component';
import { MypipePipe } from './mypipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipePipe,
    IndexComponent,
    DashboardComponent,
    NewQuestionComponent,
    NewAnswerComponent,
    AnswerDashboardComponent,
    MypipePipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
