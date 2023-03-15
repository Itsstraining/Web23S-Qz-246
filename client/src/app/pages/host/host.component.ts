import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { async, Observable } from 'rxjs';
import { PlayerState } from 'src/app/ngrx/states/player.state';
import { QuestionState } from 'src/app/ngrx/states/question.state';
import { AdminHostService } from 'src/app/services/admin-host.service';
import { PlayerService } from 'src/app/services/player.service';
import { QuestionService } from 'src/app/services/question.service';
import { Player } from 'src/models/player.model';
import { Question } from 'src/models/question.model';
import * as PlayerActions from '../../ngrx/actions/player.action';
@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent {
  listIcon = [
    "square",
    "circle",
    "triangle",
    "rhombus"];
  timer = 5;
  playerList$?: Observable<Player[]>;
  // playerList:Player[]=this.playerService.playerList;
  lengthPlayer = 0;
  pinGame = "";
  isShowCountdown: boolean = true;
  isShowQuestion: boolean = false;
  isShowResult: boolean = false;
  isShowRank: boolean = false;
  isShowSummary: boolean = false;
  isNextQuestion = false;
  currentQuestionIndex = 0 ;
  questionList$: Observable<Question[]>;
  // questionData:Question = this.questionService.questions[this.currentQuestionIndex];
  questionData?:Question;
  lenghtQuestion = 0;
  timerQuestion = this.questionData?.answerTime;
  constructor(private router :Router,
    private playerService:PlayerService,
    private adminHostService:AdminHostService,
    private questionService:QuestionService,
    private store: Store<{
      question: QuestionState,
      player: PlayerState
    }>) {
    this.questionList$ = this.store.select((state) => state.question.questions);
     this.questionList$.subscribe((data)=>{
      // console.log(data[this.currentQuestionIndex])
      this.questionData = data[this.currentQuestionIndex];
      this.lenghtQuestion = data.length;
      // this.timerQuestion = this.questionData?.answerTime;
    });
    this.playerList$ = this.store.select((state) => state.player.players);
    this.playerList$.subscribe((data)=>{
      this.lengthPlayer = data.length;
    }
  )
  }


  ngOnInit():void{
    this.timer=6
    this.makeIteration()
  }

  skipQuestion(){
    this.timerQuestion=0;
    this.isNextQuestion = true;
    clearInterval(this.timerCountdown)
    this.adminHostService.timeOut()
  }
  makeIteration = (): void => {
    console.clear();
    if (this.timer > 1) {
      setTimeout(this.makeIteration, 1000);
    } else if (this.timer === 1) {
      // this.isShowCountdown = false;
      // this.isQuestionScreen = true;
      this.isShowCountdown = false;
      this.isShowQuestion = true;
      this.timerQuestion = this.questionData?.answerTime;
      this.timeQuestionCountdown(this.timerQuestion)
    }
    this.timer -= 1;
  };
  timerCountdown:any
  timeQuestionCountdown(seconds:any) {
    let time = seconds
    let interval = setInterval(() => {
      this.timerQuestion=time;
      if (time === 0) {
        clearInterval(interval)
        // array.some(element => element % 2 === 0)
        this.isNextQuestion = true;
        this.adminHostService.timeOut()
      }
      time--
    }, 1000)
    this.timerCountdown=interval;
  }
  getQuestionByIndex(index:number){
    // this.questionData=this.questionService.questions[index]
    this.questionList$.subscribe((data)=>{
      this.questionData = data[this.currentQuestionIndex];
      // this.timerQuestion = this.questionData?.answerTime;
    });
  }
  nextQuestion(){
    // if(this.currentQuestionIndex==(this.questionService.questions.length-1){
    if(this.currentQuestionIndex==this.lenghtQuestion-1){
      this.currentQuestionIndex++;
      this.adminHostService.sendShowRanking(this.playerList$)
      this.isShowCountdown=false;
      this.isShowQuestion=false;
      this.isShowRank=false;
      this.isShowSummary=true;
      this.isNextQuestion=false;
    }else{
      this.isShowQuestion=false;
      this.isShowRank=true;
      this.isNextQuestion=false;
    }
    // if(this.playerService.playerList.length!=0){
    //   this.playerService.playerList.sort((a, b) => b.score - a.score);
    // }
    if(this.lengthPlayer!=0){
      // this.playerService.playerList.sort((a, b) => b.score - a.score);
      this.store.dispatch(PlayerActions.sortPlayers());
    }
    // this.adminHostService.sendPlayerList(this.playerService.playerList)
    // this.playerList=this.playerService.playerList;
    this.adminHostService.sendPlayerList(this.playerList$)
    // this.playerList=this.playerService.playerList;
  }

  showNewQuestion(){
    // if(this.currentQuestionIndex<this.questionService.questions.length-1){
    if(this.currentQuestionIndex<this.lenghtQuestion-1){
      this.currentQuestionIndex++;
      this.getQuestionByIndex(this.currentQuestionIndex)
      this.timer=6
      this.makeIteration()
      this.isShowRank=false;
      this.isShowCountdown=true;
      // this.timeQuestionCountdown(5)
      // this.adminHostService.startGame(this.questionData)
    }
  }
  exit(){
    // this.isShowSummary=false;
    // this.currentQuestionIndex=0;
    // this.getQuestionByIndex(this.currentQuestionIndex)
    this.router.navigate(['/loppy'])
  }
}
