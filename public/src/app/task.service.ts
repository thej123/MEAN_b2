import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // <— Imported

@Injectable()
export class TaskService {

  constructor(private _http: Http) { }

  loggedUser = null;

  // LOGIN PAGE
  // get user_id if he exist in Usertable
  // getUser(allusers) {
  //   // this.loggedUser = user;
  //   // console.log("service", user)
  //   this._http.post('/user').subscribe(
  //     (response) => {
  //       allusers(true);
  //       // console.log("2")        
  //     },
  //     (error) => {
  //       console.log("could not retrive all data", error)
  //     }
  //   );
  // }
  // create user in Usertable (if he does not exist before)
  createUser(user) {
    this.loggedUser = user.name;
    console.log("in taskserv",this.loggedUser)
    return this._http.post('/user', user).subscribe(
      (response) => {
        console.log("note sent to base", response);
      },
      (error) => {
        console.log("could not add note", error);
      }
    );
  }


  // DASHBOARD ETC
  // get all questions
  getQuestions(callback) {
    // console.log("1")
    this._http.get('/questions').subscribe(
      (response) => {
        callback(response.json());
        // console.log("2")        
      },
      (error) => {
        console.log("could not retrive all data", error)
      }
    );
  }
  // get refined search of questions
  // getrefinedQuestions(searchTerm, callback) {
  //   this._http.get('/refinedquestions').subscribe(
  //     (response) => {
  //       callback(response.json());
  //     },
  //     (error) => {
  //       console.log("could not retrive refined data", error)
  //     }
  //   )
  // }
  // delete one question
  destroyQuestion(id) {
    console.log("delete id", id)
    this._http.delete('/question/'+id).subscribe(
      (response) => {
        console.log("deleted question", response)
      },
      (error) => {
        console.log(error)
      }
    ) 
  }
  // get info on one single question using the id
  getOneQuestion(id, callback) {
    console.log("getonequestion", id);
    this._http.get("/question/"+id).subscribe(
      (response) => {
        console.log("got question", response)
        callback(response.json());
      },
      (error) => {
        console.log(error)
      }
    )
  }
  // update the vote of a question
  updateQuestion(id, updatedQuestionObject) {
    this._http.put("/question/"+id, updatedQuestionObject).subscribe(
      (response) => {
        console.log("updated", response);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  // create a new question
  createQuestion(question) {
    console.log("create me",question)
    this._http.post('/question', question).subscribe(
      (response) => {
        console.log("note sent to base", response);
      },
      (error) => {
        console.log("could not add note", error);
      }
    );
  }


}
