import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrueFalseRoutingModule } from './true-false-routing.module';
import { TrueFalseComponent } from './true-false.component';


@NgModule({
  declarations: [
    TrueFalseComponent
  ],
  imports: [
    CommonModule,
    TrueFalseRoutingModule
  ]
})
export class TrueFalseModule { }
