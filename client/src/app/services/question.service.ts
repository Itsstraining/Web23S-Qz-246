import { Injectable } from '@angular/core';
import { Question } from 'src/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  questions = [
    {
      questionType: "Quiz",
      point: 1,
      answerTime: 30,
      backgroundImage: "",
      title: "Câu hỏi 1",
      answers: [
        { id: "a", body: "aa", isCorrect: true },
        { id: "b", body: "bb", isCorrect: false },
        { id: "c", body: "cc", isCorrect: false },
        { id: "d", body: "dd", isCorrect: false },
      ],
      questionId: 1,
    },
    {
      questionType: "True/False",
      point: 1,
      answerTime: 20,
      backgroundImage: '',
      title: "Câu hỏi 2",
      answers: [
        { id: "a", body: "True", isCorrect: true },
        { id: "b", body: "False", isCorrect: false },
      ],
      questionId: 2,
    },
  ];
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

  updateQuestion(question: Question){
    this.questions[question.questionId-1] = question;
  }

}

