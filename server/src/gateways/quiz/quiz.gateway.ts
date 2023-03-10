import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Socket } from 'socket.io-client';
import { Server } from 'socket.io';
import { Observable } from 'rxjs';
@WebSocketGateway({ cors: true })
export class QuizGateway {
  @WebSocketServer() server: Server;

  // clients = [];
  room = '';
  handleConnection(client: Socket, ...args: any[]) {
    console.log(`client ${client.id} connected`);
    // this.client.join('123')
    // this.clients.push(client);
  }

  handleDisconnect(client: Socket) {
    console.log(`client ${client.id} disconnected`);
  }

  @SubscribeMessage('create-room')
  handlecreateRoom(client: Socket, payload: any): any {
    // client.join("123");
    this.room = payload;
    this.server.in(client.id).socketsJoin(this.room);
    console.log(`admin ${client.id} joined room: ${this.room}`);
    // console.log(payload);
  }

  @SubscribeMessage('join-room')
  handleJoinRoom(client: Socket, payload: any): any {
    // client.join("123");
    this.server.in(client.id).socketsJoin(payload.room);
    console.log(
      `player with id ${client.id} and name ${payload.name} joined room: ${payload.room}`,
    );
    // this.server.in("123").emit('add-player', {
    //   'question' : "What do you know about Willam Shakespear?"
    // });
    // this.server.to(roomId).emit('message-'+roomId, payload);
    payload.id = client.id;
    this.server.to(this.room).emit('add-player', payload);
    // this.server.emit('message-'+roomId, payload);
    // return payload;
  }

  @SubscribeMessage('add-player')
  handAddPlayer(client: any, payload: any): Observable<WsResponse<any>> | any {
    console.log(payload);
  }

  @SubscribeMessage('start-game')
  handleStartGame(@MessageBody() body: any) {
    // console.log(body);
    this.server.to(this.room).emit('next-question-item', body);
  }

  @SubscribeMessage('timeout-questions')
  handleTimeOut(@MessageBody() body: any) {
    // console.log("dddd");
    this.server.to(this.room).emit('show-correct-question', body);
  }

  @SubscribeMessage('send-player-list')
  handlePlayerList(@MessageBody() body: any) {
    console.log(body);
    this.server.to(this.room).emit('get-player-list', body);
  }

  @SubscribeMessage('show-ranking')
  handleShowRanking(@MessageBody() body: any) {
    this.server.to(this.room).emit('show-ranking-player', body);
  }
}
