import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionAdRoutingModule } from './question-ad-routing.module';
import { QuestionAdComponent } from './question-ad.component';


@NgModule({
  declarations: [
    QuestionAdComponent
  ],
  imports: [
    CommonModule,
    QuestionAdRoutingModule
  ]
})
export class QuestionAdModule { }
