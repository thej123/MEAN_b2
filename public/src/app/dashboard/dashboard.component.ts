import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  box = {
    search: ''
  }

  loggeduser;

  allQuestions = [];

  constructor(private _taskservice: TaskService, private _router: Router) { 
  }

  ngOnInit() {
    if(!this._taskservice.loggedUser){
      this._router.navigate(['/index']);
    }
    this.loggeduser = this._taskservice.loggedUser;
    this._taskservice.getQuestions((questions) => {
      this.allQuestions = questions;
      console.log("allquestions", this.allQuestions)
    })
  }


  delete(id, object) {
    const i = this.allQuestions.indexOf(object);
    this.allQuestions.splice(i, 1);
    console.log("compnent id", this.allQuestions)
    this._taskservice.destroyQuestion(id);
  }

  onAnswer(id) {
    this._router.navigate(['/new_answer/'+id]);
  }

  onShow(id) {
    this._router.navigate(['/show_question/'+id]);
  }

}
