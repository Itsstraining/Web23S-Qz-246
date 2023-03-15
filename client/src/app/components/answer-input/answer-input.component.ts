import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Answer } from 'src/models/answer.model';

@Component({
  selector: 'app-answer-input',
  templateUrl: './answer-input.component.html',
  styleUrls: ['./answer-input.component.scss']
})
export class AnswerInputComponent {
  @Input() answerItem! : Answer
  @Output() answerItemSelect = new EventEmitter<any>();
  @Input() lengthAnswer! : number
  ngOnInit(): void {
  }
  onAnswerCheckChange(){
    this.answerItemSelect.emit(this.answerItem!)
  }
}
