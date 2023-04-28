import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { QuestionService } from '../Services/question.service';
import { User } from '../Models/user';
import { Question } from '../Models/question';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private userService:UserService, private questionService:QuestionService){}

  inputValue=''
  questions: Question[]=[];
  showQuestions:boolean=false;
  newName:string='';
  newAge:number=0;
  points:number=0;

  setShowQuestions():void{
    this.showQuestions=true;
  }

  getQuestions(){
    this.questionService.getQuestions().subscribe(result=>{  
      this.questions=result.sort(() => .5 - Math.random()).slice(0,3);
    })
  }

  addUser(){
    this.points=0;
    let newUser={Name: this.newName, Age: this.newAge};
    this.userService.addUser(newUser);
    this.setShowQuestions();
    this.getQuestions();
  }

  setAnswer(s1:string, s2:string){
    if(s1===s2)
      this.points=this.points+1;
  }
}
