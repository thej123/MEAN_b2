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
      this._router.navigate(['/']);
    }
    this.loggeduser = this._taskservice.loggedUser;
    this._taskservice.getQuestions((questions) => {
      this.allQuestions = questions;
    })
  }

  onSearch() {
    this._taskservice.getrefinedQuestions(this.box.search, (questions) => {
      this.allQuestions = questions;
    })
  }

  delete(id) {
    // const i = this.allQuestions.indexOf(object);
    this.allQuestions.splice(id, 1);
    console.log("compnent id", this.allQuestions)
    this._taskservice.destroyQuestion(id);
  }

}
