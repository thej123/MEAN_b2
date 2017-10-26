import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  user = {
    name: ''
  }

  constructor(private _taskservice: TaskService, private _router: Router) { }

  ngOnInit() {
    if(this._taskservice.loggedUser){
      this._taskservice.loggedUser = null;
    }
  }

  onSubmit() {
    console.log("submit");
    this._taskservice.loggedUser = this.user.name;
    this._router.navigate(['/']);
    }

}
