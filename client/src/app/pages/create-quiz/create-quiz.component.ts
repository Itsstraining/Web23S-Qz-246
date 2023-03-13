import { Component } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { QuizService } from 'src/app/services/quiz.service';
import { Answer } from 'src/models/answer.model';
import { Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent {
  constructor(private questtionService: QuestionService,private quizService:QuizService) { }

  quiz :Quiz= this.quizService.quiz;
  questions :Question[] = this.questtionService.questions;
  questionTypeList = this.questtionService.questionType;
  questionTimeList = this.questtionService.questionTime;
  questionPointList = this.questtionService.questionPoint;
  isSettingQuiz = false;
  questionItem?:Question={
    questionType: "Quiz",
    point: 1,
    answerTime: 30,
    backgroundImage: "",
    title: "Câu hỏi mới",
    answers: [
      { id: "a", body: "", isCorrect: false },
      { id: "b", body: "", isCorrect: false },
      { id: "c", body: "", isCorrect: false },
      { id: "d", body: "", isCorrect: false },
    ],
    questionId: 1,
  }
  indexQuestionItem :number = 0;
  
  onChangeQuiz(event: any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.quiz.quizImage = reader.result as string;
      };
      $('.image-input label').css('display','none');
    }
  }

  onChangeQuestion(event: any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.questionItem!.backgroundImage = reader.result as string;
      };
    }
  }

  changeSettingQuiz(){
    this.isSettingQuiz = !this.isSettingQuiz;
  }

  getQuestionItem(questionItem: Question){
    this.questionItem = questionItem;
  }

  getQuestionItemIndex(indexQuestion: number){
    this.indexQuestionItem = indexQuestion;
  }

  changeQuestionType(){
    let question:Question={
      questionType: this.questionItem!.questionType,
      point: this.questionItem!.point,
      answerTime: this.questionItem!.answerTime,
      backgroundImage: this.questionItem!.backgroundImage,
      title: this.questionItem!.title,
      questionId: this.questionItem!.questionId,
      answers: this.questionItem!.answers,
    }
    if(this.questionItem!.questionType == "True/False"){
      question!.answers = [
        { id: "a", body: "True", isCorrect: false },
        { id: "b", body: "False", isCorrect: false },
      ]
    }else{
      question!.answers = [
        { id: "a", body: "", isCorrect: false },
        { id: "b", body: "", isCorrect: false },
        { id: "c", body: "", isCorrect: false },
        { id: "d", body: "", isCorrect: false },
      ]
    }
    this.questtionService.updateQuestion(question!);
    this.questionItem=question!;
  }

  updateQuestion(){
    let question:Question={
      questionType: this.questionItem!.questionType,
      point: this.questionItem!.point,
      answerTime: this.questionItem!.answerTime,
      backgroundImage: this.questionItem!.backgroundImage,
      title: this.questionItem!.title,
      questionId: this.questionItem!.questionId,
      answers: this.questionItem!.answers,
    }
    this.questtionService.updateQuestion(question!);
    this.questionItem=question!;
  }

  onAnswerCheckChange(answer:Answer){
    this.questionItem?.answers.forEach((item)=>{
      if(item.id==answer.id){
        item.isCorrect = answer.isCorrect;
        item.body = answer.body;
      }else{
        item.isCorrect = false;
      }
    })
  }

  addQuestion(){
    let question:Question = {
      questionType: "Quiz",
      point: 1,
      answerTime: 30,
      backgroundImage: "",
      title: "",
      answers: [
        { id: "a", body: "aa", isCorrect: false },
        { id: "b", body: "bb", isCorrect: false },
        { id: "c", body: "cc", isCorrect: false },
        { id: "d", body: "dd", isCorrect: false },
      ],
      questionId: this.questions.length+1,
    }
    this.questtionService.questions.push(question);
  }

  duplicateQuestion(){
    let question:Question = {
      questionType: this.questionItem!.questionType,
      point: this.questionItem!.point,
      answerTime: this.questionItem!.answerTime,
      backgroundImage: this.questionItem!.backgroundImage,
      title: this.questionItem!.title,
      answers: this.questionItem!.answers,
      questionId: this.questionItem!.questionId+1,
    }
    if(this.indexQuestionItem==this.questtionService.questions.length-1){
      this.questtionService.questions.push(question);
    }else{
      this.questtionService.questions.splice(this.indexQuestionItem+1, 0, question);
    }
  }

  deleteQuestion(){
    this.questtionService.questions.splice(this.questionItem!.questionId-1,1);
    this.questions = this.questtionService.questions;
    this.questionItem = this.questions[0];
  }

  updateQuiz(){
    let newQuiz:Quiz= {
      quizName: this.quiz.quizName,
      quizDescription: this.quiz.quizDescription,
      quizImage: this.quiz.quizImage,
      creatorId: this.quiz.creatorId,
      isPublic: this.quiz.isPublic,
      questions: this.questions,
      quizId: this.quiz.quizId,
    }
    
    this.quizService.updateQuiz(newQuiz);
    this.quiz = newQuiz;
  }

  saveQuiz(){
    this.updateQuiz();
    this.quizService.saveQuiz();
  }
}
