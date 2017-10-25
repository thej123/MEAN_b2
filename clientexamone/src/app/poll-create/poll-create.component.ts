import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.css']
})
export class PollCreateComponent implements OnInit {

  loggeduser;

  constructor(private _taskservice: TaskService, private _router: Router) {
   }

  ngOnInit() {
    if(!this._taskservice.loggedUser){
      this._router.navigate(['/']);
    }
    this.loggeduser = this._taskservice.loggedUser;
    // console.log("loggeduser", this.loggeduser)
  }

  questionobject = {
    creater: '',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    votesCount1: 0,
    votesCount2: 0,
    votesCount3: 0,
    votesCount4: 0,
  }
  



  SubmitNewQuestion() {
    this.questionobject.creater = this.loggeduser;
    console.log(this.questionobject);
    this._taskservice.createQuestion(this.questionobject);
    this._router.navigate(['/dashboard']);
  }
}
