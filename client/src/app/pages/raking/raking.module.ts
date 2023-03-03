import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RakingRoutingModule } from './raking-routing.module';
import { RakingComponent } from './raking.component';


@NgModule({
  declarations: [
    RakingComponent
  ],
  imports: [
    CommonModule,
    RakingRoutingModule
  ]
})
export class RakingModule { }
