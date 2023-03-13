import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Player } from 'src/models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor( private socket:Socket) { }
  playerList : Player[]= [
    // {
    //   id: 1,
    //   name: "Player 1",
    //   score: 0,
    //   correctAnswer: 0,
    // },
  ];

  playerCurrent!:Player

  getPlayerList() {
    return this.socket.fromEvent("get-player-list");
  }

  sendPlayerListUpdate(){
    console.log("sendPlayerListUpdate",this.playerList)
    this.socket.emit("send-player-list", this.playerList)
  }

  updatePlayerList(playerList:any) {
    this.playerList = playerList
  }

  joinGame(data:any) {
    this.socket.emit('join-room', data);
    let player = data
    delete player.room;
    this.playerCurrent=player
    console.log("playerCurrent",this.playerCurrent)
  }

  nextQuestion() {
    return this.socket.fromEvent("next-question-item");
  }

  showQuestionCorrect() {
    // const channel = 'message-' + roomId;
    return this.socket.fromEvent("show-correct-question");
  }

  showRanking() {
    return this.socket.fromEvent("show-ranking-player");
  }
}
