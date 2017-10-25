import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    name: ''
  }

  constructor(private _taskservice: TaskService) { }

  ngOnInit() {
    if(this._taskservice.loggedUser){
      this._taskservice.loggedUser = null;
    }
  }
  
  onSubmit() {
      // this.user.name = this.user.name.toLowerCase();    
      this._taskservice.createUser(this.user);
      }

}
