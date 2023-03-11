import { NgModule } from "@angular/core";
import { NarBarComponent } from "../components/nar-bar/nar-bar.component";
import { FormsModule } from '@angular/forms';
import { TaskquizComponent } from "../components/taskquiz/taskquiz.component";
import { TrendingComponent } from "../components/trending/trending.component";
import { NavBarCreateComponent } from "../components/nav-bar-create/nav-bar-create.component";
import { QuestionItemComponent } from "../components/question-item/question-item.component";
import { AnswerInputComponent } from "../components/answer-input/answer-input.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    NarBarComponent,
    TaskquizComponent,
    TrendingComponent,
    NavBarCreateComponent,
    QuestionItemComponent,
    AnswerInputComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  providers: [
    FormsModule
  ],
  exports: [
    NarBarComponent,
    FormsModule,
    TaskquizComponent,  
    TrendingComponent,
    NavBarCreateComponent,
    QuestionItemComponent,
    AnswerInputComponent,
  ]
})
export class SharedModule { }
