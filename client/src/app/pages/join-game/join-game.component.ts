import { Component } from '@angular/core';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.scss']
})
export class JoinGameComponent {

  pin: string='';
  isInputName: boolean = false;
  name: string = '';
  enterPin(){
    this.isInputName = true;
  }
  playGame(){
    console.log(this.pin);
    console.log(this.name);
  }
}
