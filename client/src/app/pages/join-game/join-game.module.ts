import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinGameRoutingModule } from './join-game-routing.module';
import { JoinGameComponent } from './join-game.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    JoinGameComponent
  ],
  imports: [
    CommonModule,
    JoinGameRoutingModule,
    SharedModule
  ]
})
export class JoinGameModule { }
