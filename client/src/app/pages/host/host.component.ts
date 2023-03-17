import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { async, Observable } from 'rxjs';
import { PlayerState } from 'src/app/ngrx/states/player.state';
import { QuestionState } from 'src/app/ngrx/states/question.state';
import { RoomState } from 'src/app/ngrx/states/room.state';
import { AdminHostService } from 'src/app/services/admin-host.service';
import { PlayerService } from 'src/app/services/player.service';
import { QuestionService } from 'src/app/services/question.service';
import { Player } from 'src/models/player.model';
import { Question } from 'src/models/question.model';
import { Room } from 'src/models/room.model';
import * as PlayerActions from '../../ngrx/actions/player.action';
import * as QuestionActions from '../../ngrx/actions/question.action';
import * as RoomActions from '../../ngrx/actions/room.action';
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
  playerListData!: Player[];
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
  room$?: Observable<Room|null>;
  roomData?:Room;
  timerQuestion = this.questionData?.answerTime;
  constructor(private router :Router,
    private playerService:PlayerService,
    private adminHostService:AdminHostService,
    private questionService:QuestionService,
    private store: Store<{
      question: QuestionState,
      player: PlayerState,
      room:RoomState
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
      this.playerListData = data;
    }
  )
    this.room$ = this.store.select((state) => state.room.room);
    this.room$.subscribe((data:any)=>{
      this.roomData = data;
    })
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
    // console.clear();
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
    if(this.lengthPlayer!=0){
      // this.playerService.playerList.sort((a, b) => b.score - a.score);

      this.playerListData=this.playerListData.slice().sort((a, b) => b.score as number - a.score as number);
      // playerListSort.sort();
      // // console.log("player-List-Sort",this.playerListData)
      this.store.dispatch(PlayerActions.sortPlayers({players:this.playerListData}));
      this.playerList$?.subscribe((data)=>{
        this.playerListData = data;
      })
    }

    // if(this.currentQuestionIndex==(this.questionService.questions.length-1){
    if(this.currentQuestionIndex==this.lenghtQuestion-1){
      this.currentQuestionIndex++;
      // this.playerList$?.subscribe((data)=>{
        this.adminHostService.sendShowRanking(this.playerListData)
      // })
      // this.adminHostService.sendShowRanking(this.playerList$)
      this.isShowCountdown=false;
      this.isShowQuestion=false;
      this.isShowRank=false;
      this.isShowSummary=true;
      this.isNextQuestion=false;
    }else{
      this.isShowQuestion=false;
      this.isShowRank=true;
      this.isNextQuestion=false;
      let room=this.roomData;
      room!.pin="";
      room!.players=this.playerListData;
      // this.store.dispatch(RoomActions.updateRoom({room:room!}));
    }
    // if(this.playerService.playerList.length!=0){
    //   this.playerService.playerList.sort((a, b) => b.score - a.score);
    // }


    // this.adminHostService.sendPlayerList(this.playerService.playerList)
    // this.playerList=this.playerService.playerList;
    this.playerList$?.subscribe((data)=>{
      this.playerListData = data;
    })
    this.adminHostService.sendPlayerList(this.playerListData)
    // this.adminHostService.sendPlayerList(this.playerList$)
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
      this.questionList$.subscribe((data)=>{
        this.questionData = data[this.currentQuestionIndex];
        this.timerQuestion = this.questionData?.answerTime;
      });
      this.adminHostService.startGame(this.questionData!)
    }
  }
  exit(){
    // this.isShowSummary=false;
    // this.currentQuestionIndex=0;
    // this.getQuestionByIndex(this.currentQuestionIndex)
    this.router.navigate(['/library'])
  }
}
