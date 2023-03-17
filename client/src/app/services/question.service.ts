import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Question } from 'src/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor( private socket:Socket) { }

  questions:Question[] = [
    {
      questionType: "Quiz",
      point: 1,
      answerTime: 30,
      backgroundImage: "",
      title: "",
      answers: [
        { id: "a", body: "", isCorrect: true },
        { id: "b", body: "", isCorrect: false },
        { id: "c", body: "", isCorrect: false },
        { id: "d", body: "", isCorrect: false },
      ],
      questionId: "1",
    },
  ];

  questionLength = this.questions.length;

  questionType=[
    "Quiz","True/False"
  ]

  questionTime=[
    10,20,30
  ]

  questionPoint=[
    1,2,3,4,5
  ]

  questionSelected?:Question ;

  getIndexQuestion(questionId:string){
    return this.questions.findIndex((item)=>item.questionId==questionId);
  }

  updateQuestion(question: Question){
    let index = this.getIndexQuestion(question.questionId);
    this.questions[index] = question;
  }

  deleteQuestion(questionId:string){
    let index = this.getIndexQuestion(questionId);
    this.questions.splice(index,1);
  }

  declareQuestion(indexQuestionItem:string, question:Question){
    let index = this.getIndexQuestion(indexQuestionItem);
    if(index==this.questions.length-1){
      this.questions.push(question);
    }else{
      this.questions.splice(index+1, 0, question);
    }

  }


  getLenghtQuestions() {
    // const channel = 'message-' + roomId;
    return this.socket.fromEvent("get-lenght-questions");
  }
}

