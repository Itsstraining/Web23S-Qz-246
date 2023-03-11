import { Injectable } from '@angular/core';
import { Quiz } from 'src/models/quiz.model';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private questionSevice: QuestionService) { }

  quiz :Quiz= {
    quizName: "Quiz mới",
    quizDescription: "Mô tả quiz mới",
    quizImage: "https://play-lh.googleusercontent.com/A6y8kFPu6iiFg7RSkGxyNspjOBmeaD3oAOip5dqQvXASnZp-Vg65jigJJLHr5mOEOryx",
    creatorId: "1",
    isPublic: false,
    questions: this.questionSevice.questions,
    quizId: 1,
  }

  updateQuiz(quiz:Quiz){
    this.quiz = quiz;
  }

  saveQuiz(){
    let data=this.quiz
    console.log(data)
  }

}
