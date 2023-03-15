import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateQuizRoutingModule } from './create-quiz-routing.module';
import { CreateQuizComponent } from './create-quiz.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreateQuizComponent
  ],
  imports: [
    CommonModule,
    CreateQuizRoutingModule,
    SharedModule,

  ]
})
export class CreateQuizModule { }
