import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlayerState } from 'src/app/ngrx/states/player.state';
import { QuestionState } from 'src/app/ngrx/states/question.state';
import { RoomState } from 'src/app/ngrx/states/room.state';
import { PlayerService } from 'src/app/services/player.service';
import { QuestionService } from 'src/app/services/question.service';
import { Player } from 'src/models/player.model';
import { Question } from 'src/models/question.model';
import { Room } from 'src/models/room.model';
import * as PlayerActions from '../../ngrx/actions/player.action';
import * as QuestionActions from '../../ngrx/actions/question.action';
import * as RoomActions from '../../ngrx/actions/room.action';
@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.scss']
})
export class JoinGameComponent {

  pin: string = '';
  isInputName: boolean = false;
  name: string = '';
  isPlayerAdded = false
  namePlayer: string = ""
  questionList$?: Observable<Question[]>;
  room$: Observable<Room|null>;
  playerList$?: Observable<Player[]>;
  lenghtPlayer: number = 0;
  constructor(
    private playerService: PlayerService,
    private router: Router,
    private questionService: QuestionService,
    private store: Store<{
      question: QuestionState,
      player: PlayerState,
      room:RoomState
    }>
    ) {
      this.questionList$ = this.store.select((state) => state.question.questions);
      // this.questionList$.subscribe((data)=>{
      //   this.questionService.questionSelected = data[0];
      //   this.questionService.questionLength = data.length;
      // })
      this.playerList$ = this.store.select((state) => state.player.players);
      this.playerList$.subscribe((data)=>{
        this.lenghtPlayer = data.length;
        // this.playerService.playerList = data
        // // console.log("lenghtPlayer", this.lenghtPlayer)
      })
      this.room$ = this.store.select((state) => state.room.room);
     }
playerListData: Player[] = []
  ngOnInit(): void {
    this.getNextQuestion();
    this.playerService.getPlayerList().subscribe((playerList: any) => {
      // this.playerService.playerList = playerList;
      this.playerListData = playerList
      console.log("getPlayerList", playerList)
      this.store.dispatch(PlayerActions.updatePlayers({players: playerList}))
      // console.log("getPlayerList", this.playerService.playerList)
      // // console.log("getPlayerList-1", playerList)
      // this.playerService.playerList.findIndex((player: any) => {
        this.playerList$?.subscribe((data) => {
          // // console.log("getPlayerList-2", data)
          // this.playerListData = data
          data.findIndex((player: any) => {
          if (player.name === this.namePlayer) {
            // // console.log("playerCurrent", player)
            let infoPlayer = player
            // delete infoPlayer.room;
            // this.playerService.playerCurrent = infoPlayer
            this.store.dispatch(PlayerActions.updateSelecePlayer({player: infoPlayer}))
          }
        })
      })
      // this.playerService.updatePlayerList(playerList)
    })
  }

  checkPin(): boolean {
    let isExist = false
    this.store.dispatch(RoomActions.getRoomByPin({pin: this.pin}))
    this.room$.subscribe((data)=>{
      if(data){
        isExist = true
        return
      }
    })
    return isExist
  }

  enterPin() {
    if (isNaN(Number(this.pin))&&this.checkPin() ) {
    // if (isNaN(Number(this.pin))) {
      alert("Please enter correct pin")
      return
    }
    this.isInputName = true;
  }

  checkPlayer(): boolean {
    let isExist = false
    // this.playerList$?.subscribe((player:any) => {
      this.playerListData.forEach((player:Player) => {
        console.log(player)
        if (player.name === this.namePlayer) {
          // alert("Name is already exist")
          isExist = true
          return
        }
      })
    // })
    return isExist
  }

  joinGame() {
    // let isExist = this.checkPlayer()
    // console.log("isExist", isExist)
    if(this.namePlayer.length != 0 && !this.checkPlayer()){
    let infoPlayer = {
      room: this.pin,
      // id: this.playerService.playerList.length + 1,
      id: this.lenghtPlayer + 1,
      name: this.namePlayer,
      score: 0,
      correctAnswer: 0,
    }
    this.playerService.joinGame(infoPlayer);
    if(!this.checkPlayer()){
      this.isPlayerAdded = !this.isPlayerAdded
    }
  }else{
      // if (this.namePlayer.length === 0) {
      alert("Please enter name")
      this.isInputName = true;
    }
  }

  getNextQuestion() {
    this.playerService.nextQuestion().subscribe((question: any) => {
      // this.questionService.questionSelected = question;
      this.store.dispatch(QuestionActions.updateSeleceQuestion({question: question}))
      // console.log("join-game", this.playerService.playerList)
      this.playerList$?.subscribe((data) => {
        // // console.log("join-game-player-list", data)
      })

      this.router.navigateByUrl('/player');
    });
    this.questionService.getLenghtQuestions().subscribe((length: any) => {
      this.questionService.questionLength = length
      // // console.log("join-game-question-length", length)
    });
  }
}
