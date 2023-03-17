import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlayerState } from 'src/app/ngrx/states/player.state';
import { QuestionState } from 'src/app/ngrx/states/question.state';
import { QuizState } from 'src/app/ngrx/states/quiz.state';
import { RoomState } from 'src/app/ngrx/states/room.state';
import { UserState } from 'src/app/ngrx/states/user.state';
import { AdminHostService } from 'src/app/services/admin-host.service';
import { PlayerService } from 'src/app/services/player.service';
import { QuestionService } from 'src/app/services/question.service';
import { Player } from 'src/models/player.model';
import { Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { Room } from 'src/models/room.model';
import { User } from 'src/models/user.model';
import * as PlayerActions from '../../../ngrx/actions/player.action';
import * as QuestionActions from '../../../ngrx/actions/question.action';
import * as RoomActions from '../../../ngrx/actions/room.action';
import * as UserActions from '../../../ngrx/actions/user.action';
@Component({
  selector: 'app-loppy',
  templateUrl: './loppy.component.html',
  styleUrls: ['./loppy.component.scss']
})
export class LoppyComponent {

  // playerList: Player[] = this.playerService.playerList;
  playerList$!: Observable<Player[]>;
  playerListData!: Player[];
  pinGame = "";
  lenghtPlayer = 0;
  questionList$!: Observable<Question[]>;
  lenghtQuestion = 0;
  questionData!: Question;
  user$!: Observable<User|null>;
  userId: string = "";
  quiz$!: Observable<Quiz|null>;
  constructor(private playerService: PlayerService,
    private adminHostService: AdminHostService,
    private questionService: QuestionService,
    private router:Router,
    private store: Store<{
      question: QuestionState,
      player: PlayerState,
      room:RoomState,
      user:UserState,
      quiz:QuizState
    }>) {
      this.playerList$ = this.store.select((state) => state.player.players);
      this.playerList$.subscribe((data)=>{
        this.lenghtPlayer = data.length;
      })
      this.questionList$ = this.store.select((state) => state.question.questions);
      this.questionList$.subscribe((data)=>{
        this.questionData = data[0];
        this.lenghtQuestion = data.length;
      })

      this.user$=this.store.select((state)=>state.user.user)
      this.user$.subscribe((data)=>{
        this.userId = data?.userid!;
      })
      this.quiz$ = this.store.select((state)=>state.quiz.selectedQuiz)
    }

  ngOnInit(): void {
    this.pinGame = Date.now().toString().slice(7, 13)
    this.getAddPlayers()
    this.getPlayers()
    this.createRoom()
  }


  startGame() {
    // this.getQuestionByIndex(this.currentQuestionIndex)
    // this.adminHostService.startGame(this.questionService.questions[0])
    this.adminHostService.startGame(this.questionData)
    // this.adminHostService.sendLenghtQuestions(this.questionService.questions.length)
    this.adminHostService.sendLenghtQuestions(this.lenghtQuestion)
    // this.adminHostService.sendPlayerList(this.playerService.playerList)

    // this.playerList$.subscribe((data)=>{
      // // console.log("list-start-game", this.playerListData)
      this.adminHostService.sendPlayerList(this.playerListData)
      // return
    // })
    let newRoom:Room={
      id:Date.now().toString(),
      pin:this.pinGame,
      players:[],
      quizId:"",
      createId:this.userId,
    }
    console.log("newRoom", newRoom)
    // this.store.dispatch(RoomActions.addNewRoom({room: newRoom}));
    // this.adminHostService.sendPlayerList(this.playerList$)
    // this.playerList = this.playerService.playerList;
    this.router.navigate(['/host']);
    // console.log(this.playerService.playerList)
  }

  getAddPlayers() {
    this.adminHostService.getPlayersByRoomId().subscribe((player: any) => {
      let addplayer = player
      delete addplayer.room;
      // // console.log("addplayer", addplayer)
      // this.playerService.playerList.push(addplayer)
      this.store.dispatch(PlayerActions.addNewPlayer({player: addplayer}));
      this.playerList$?.subscribe((data) => {
        // // console.log("list-join-game", data)
        this.playerListData = data;
      })
      this.adminHostService.sendPlayerList(this.playerListData)
      // console.log(this.playerList$)
    });
  }

  getPlayers() {
    this.playerService.getPlayerList().subscribe((playerList: any) => {
      // this.playerService.playerList = playerList;
      // console.log(this.playerService.playerList)
      // this.playerService.playerList = playerList;
      // // console.log(playerList)
      this.store.dispatch(PlayerActions.updatePlayers({players: playerList}));
      this.playerList$?.subscribe((data) => {
        // // console.log("list-player-list", data)
        this.playerListData = data;
      })
    }
    )
  }

  createRoom() {
    // this.adminHostService.createRoom(this.pinGame,this.questionService
    //   .questions.length);
    this.adminHostService.createRoom(this.pinGame,this.lenghtQuestion);
  }

}
