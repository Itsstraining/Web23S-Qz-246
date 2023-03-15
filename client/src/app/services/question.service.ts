import { Injectable } from '@angular/core';
import { Question } from 'src/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  questions:Question[] = [
    {
      questionType: "Quiz",
      point: 2,
      answerTime: 30,
      backgroundImage: "",
      title: "Câu hỏi 1",
      answers: [
        { id: "1", body: "aa", isCorrect: true },
        { id: "2", body: "bb", isCorrect: false },
        { id: "3", body: "cc", isCorrect: false },
        { id: "4", body: "dd", isCorrect: false },
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
        { id: "1", body: "True", isCorrect: true },
        { id: "2", body: "False", isCorrect: false },
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

