import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent {
  @Input() questionItem! : Question
  @Input() indexQuestion! : number;
  @Output() questionItemSelect = new EventEmitter<Question>();
  @Output() itemIndexSelect = new EventEmitter<number>();
  isCheck:boolean = true;
  ngAfterViewInit() {
    if(this.indexQuestion==1){
      this.questionItemSelect.emit(this.questionItem!)
      this.itemIndexSelect.emit(this.indexQuestion-1)
    }
    this.checkInfoQuestion();
  }
  checkInfoQuestion(){
    if(this.questionItem!.title==""
    &&this.questionItem!.answers[0].body==""
    &&this.questionItem!.answers[1].body==""&&
    this.questionItem!.answers[2].body==""&&
    this.questionItem!.answers[3].body==""&&
    this.questionItem!.backgroundImage==""
    ){
      this.isCheck= true;
    }else if(
    this.questionItem!.title==""
    &&this.questionItem!.answers[0].body==""
    &&this.questionItem!.answers[1].body==""&&
    this.questionItem!.backgroundImage==""
    ){
      this.isCheck= true;
    }
    this.isCheck=false;
  }

  getQuestionItemSelect(){
    this.questionItemSelect.emit(this.questionItem!)
    this.itemIndexSelect.emit(this.indexQuestion-1)
  }
}
