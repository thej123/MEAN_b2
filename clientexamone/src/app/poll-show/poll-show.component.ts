import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from './../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll-show',
  templateUrl: './poll-show.component.html',
  styleUrls: ['./poll-show.component.css']
})
export class PollShowComponent implements OnInit {

  questionID;
  displayInfo;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _taskservice: TaskService,
    private _router: Router,
  ) { 
  }

  ngOnInit() {
    if(!this._taskservice.loggedUser){
      this._router.navigate(['/']);
    }
    this._activatedRoute.paramMap.subscribe( params => {
      this.questionID = params.get('id');
      console.log("id time", this.questionID);
    })
    this._taskservice.getOneQuestion(this.questionID, info => {
      this.displayInfo = info;
      console.log("display time", this.displayInfo)
    })
    
  }

  

  voted = false;

  voteOption1() {
    this.displayInfo.votesCount1 ++;
    console.log("displayinfo)", this.displayInfo)
    this._taskservice.updateQuestion(this.displayInfo._id, this.displayInfo)
  }
  voteOption2() {
    this.displayInfo.votesCount2 ++;
    this._taskservice.updateQuestion(this.displayInfo._id, this.displayInfo)
  }
  voteOption3() {
    this.displayInfo.votesCount3 ++;
    this._taskservice.updateQuestion(this.displayInfo._id, this.displayInfo)
  }
  voteOption4() {
    this.displayInfo.votesCount4 ++;
    this._taskservice.updateQuestion(this.displayInfo._id, this.displayInfo)
  }





}
