import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateQuizRoutingModule } from './create-quiz-routing.module';
import { CreateQuizComponent } from './create-quiz.component';


@NgModule({
  declarations: [
    CreateQuizComponent
  ],
  imports: [
    CommonModule,
    CreateQuizRoutingModule
  ]
})
export class CreateQuizModule { }
