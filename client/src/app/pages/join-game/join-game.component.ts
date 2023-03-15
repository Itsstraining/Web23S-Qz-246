import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerService } from 'src/app/services/player.service';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/models/question.model';

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
  question$?: Observable<Question | any>;
  constructor(
    private playerService: PlayerService,
    private router: Router,
    private questionService: QuestionService
    ) { }

  ngOnInit(): void {
    this.getNextQuestion();
    this.playerService.getPlayerList().subscribe((playerList: any) => {
      this.playerService.playerList = playerList;
      console.log("getPlayerList", this.playerService.playerList)
      this.playerService.playerList.findIndex((player: any) => {
        if (player.name === this.namePlayer) {
          console.log("playerCurrent", player)
          this.playerService.playerCurrent = player
        }
      })
      // this.playerService.updatePlayerList(playerList)
    })
  }

  enterPin() {
    if (isNaN(Number(this.pin)) ) {
      alert("Please enter correct pin")
      return
    }
    this.isInputName = true;
  }

  joinGame() {
    if (this.namePlayer.length === 0) {
      alert("Please enter name")
      return
    }
    if (this.namePlayer.length === 0) {
      alert("Please enter name")
      return
    }
    let infoPlayer = {
      room: this.pin,
      id: this.playerService.playerList.length + 1,
      name: this.namePlayer,
      score: 0,
      correctAnswer: 0,
    }
    this.playerService.joinGame(infoPlayer);
    this.isPlayerAdded = !this.isPlayerAdded
  }

  getNextQuestion() {
    this.question$ = this.playerService.nextQuestion();
    this.question$.subscribe((question: any) => {
      this.questionService.questionSelected = question;
      console.log("join-game", this.playerService.playerList)
      this.router.navigateByUrl('/player');
    });
  }
}
