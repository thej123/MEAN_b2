import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  loggeduser;

  constructor(private _taskservice: TaskService, private _router: Router) { }

  ngOnInit() {
    // if(!this._taskservice.loggedUser){
    //   this._router.navigate(['/']);
    // }
    // this.loggeduser = this._taskservice.loggedUser;
  }

  questionobject = {
    // creater: '',
    question: '',
    description: '',
  }
  



  SubmitNewQuestion() {
    // this.questionobject.creater = this.loggeduser;
    // console.log(this.questionobject);
    this._taskservice.createQuestion(this.questionobject);
    this._router.navigate(['/']);
  }

  onCancel() {
    this._router.navigate(['/']);
  }

}
