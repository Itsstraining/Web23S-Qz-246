import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlayerState } from 'src/app/ngrx/states/player.state';
import { QuestionState } from 'src/app/ngrx/states/question.state';
import { AdminHostService } from 'src/app/services/admin-host.service';
import { PlayerService } from 'src/app/services/player.service';
import { QuestionService } from 'src/app/services/question.service';
import { Player } from 'src/models/player.model';
import { Question } from 'src/models/question.model';
import * as PlayerActions from '../../../ngrx/actions/player.action';
@Component({
  selector: 'app-loppy',
  templateUrl: './loppy.component.html',
  styleUrls: ['./loppy.component.scss']
})
export class LoppyComponent {

  // playerList: Player[] = this.playerService.playerList;
  playerList$!: Observable<Player[]>;
  pinGame = "";
  lenghtPlayer = 0;
  questionList$!: Observable<Question[]>;
  lenghtQuestion = 0;
  questionData!: Question;
  constructor(private playerService: PlayerService,
    private adminHostService: AdminHostService,
    private questionService: QuestionService,
    private router:Router,
    private store: Store<{
      question: QuestionState,
      player: PlayerState
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
    this.adminHostService.sendPlayerList(this.playerList$)
    // this.playerList = this.playerService.playerList;
    this.router.navigate(['/host']);
    // console.log(this.playerService.playerList)
  }

  getAddPlayers() {
    this.adminHostService.getPlayersByRoomId().subscribe((player: any) => {
      let addplayer = player
      delete addplayer.room;
      // this.playerService.playerList.push(addplayer)
      this.store.dispatch(PlayerActions.addNewPlayer({player: addplayer}));
    });
  }

  getPlayers() {
    this.playerService.getPlayerList().subscribe((playerList: any) => {
      // this.playerService.playerList = playerList;
      // console.log(this.playerService.playerList)
      // this.playerService.playerList = playerList;
      this.store.dispatch(PlayerActions.updatePlayers({players: playerList}));
      console.log(this.playerList$)
    }
    )
  }

  createRoom() {
    // this.adminHostService.createRoom(this.pinGame,this.questionService
    //   .questions.length);
    this.adminHostService.createRoom(this.pinGame,this.lenghtQuestion);
  }

}
