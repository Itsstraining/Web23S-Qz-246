import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Question } from 'src/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class AdminHostService {

  constructor(private socket:Socket) { }

  createRoom(roomId:string, lengthQusetions:number) {
    this.socket.emit('create-room', { room: roomId, lengthQusetions: lengthQusetions});
  }

  getPlayersByRoomId() {
    return this.socket.fromEvent("add-player");
  }

  startGame(question:Question) {
    this.socket.emit("start-game",question);
  }

  timeOut(){
    this.socket.emit("timeout-questions")
  }

  sendPlayerList(playerList:any){
    this.socket.emit("send-player-list", playerList)
  }

  sendShowRanking(playerList:any){
    this.socket.emit("show-ranking",playerList)
  }
  sendLenghtQuestions(lenght:any){
    this.socket.emit("send-lenght-questions",lenght)
  }
}
