import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http'; // <— Import
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

import { AppComponent } from './app.component';

import { TaskService } from './task.service'; // <-- Imported
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PollShowComponent } from './poll-show/poll-show.component';
import { PollCreateComponent } from './poll-create/poll-create.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FilterPipePipe } from './filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PollShowComponent,
    PollCreateComponent,
    PagenotfoundComponent,
    FilterPipePipe,
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
