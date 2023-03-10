import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsernameRoutingModule } from './username-routing.module';
import { UsernameComponent } from './username.component';


@NgModule({
  declarations: [
    UsernameComponent
  ],
  imports: [
    CommonModule,
    UsernameRoutingModule
  ]
})
export class UsernameModule { }
