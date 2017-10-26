import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer-dashboard',
  templateUrl: './answer-dashboard.component.html',
  styleUrls: ['./answer-dashboard.component.css']
})
export class AnswerDashboardComponent implements OnInit {

  loggeduser;
  question;
  questionID;
  allanswers;

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
      console.log("get this one question", this.question)
    })
    this._taskservice.getAnswers(this.questionID, callback => {
      this.allanswers = callback;
      console.log("get all its answers", this.allanswers);
    })
  }

  onLike(id, answerobject){
    answerobject.likes = answerobject.likes + 1
    this._taskservice.updateAnswer(id, answerobject)
  }

  onQuestion() {
    this._router.navigate(['/new_answer/'+this.questionID]);
    
  }

}
