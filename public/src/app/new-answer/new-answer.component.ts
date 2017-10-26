import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.css']
})
export class NewAnswerComponent implements OnInit {

  loggeduser;
  question;
  questionID;

  constructor(
    private _taskservice: TaskService, 
    private _router: Router, 
    private _activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    if(!this._taskservice.loggedUser){
      this._router.navigate(['/']);
    }
    this._activatedRoute.paramMap.subscribe( params => {
      this.questionID = params.get('id');
      console.log("id time", this.questionID);
    })
    this.loggeduser = this._taskservice.loggedUser;
    this._taskservice.getOneQuestion(this.questionID, (callback) => {
      this.question = callback;
      console.log(this.question)
    })
  }

  answerobject = {
    name: '',
    answer: '',
    details: '',
    likes: 0,
    _questionID: ''
  }
  
  SubmitNewQuestion() {
    this.answerobject.name = this.loggeduser;
    this.answerobject._questionID = this.questionID;
    console.log(this.answerobject);
    this._taskservice.createAnswer(this.answerobject, id => {
      this.question._answers.push(id);
      this._taskservice.updateQuestion(this.questionID, this.question)
    });

    this._router.navigate(['/']);
  }

  onCancel() {
    this._router.navigate(['/']);
  }

  onbackQuestion() {
    this._router.navigate(['/show_question/'+this.questionID]);
  }


}
