import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from 'src/models/answer.model';
import { Player } from 'src/models/player.model';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  time = 5;

  isShowCountdown = true;
  isShowQuestion = false;
  isShowResultQuestion = false;
  isSelectAnswer = false;
  isAnwerCorrect = true;

  isQuestionAnswered = false;
  isPreviewScreen = false;
  isQuestionScreen = false;
  isResultScreen = false;
  timer = 5;
  answerTime = 0;
  showText = false;
  isAnswerClicked = false;
  answerSelected?: Answer;
  answerCorrect = false;
  question$?: Observable<Question | any>;
  questionData?: Question;
  currentIndex = 1;
  isShowRank = false;
  infoPlayer!: Player;
  rank = 0;

  ngOnInit() {
    this.makeIteration(5);
  }

  makeIteration = (seconds: number): void => {
    this.time = seconds;
    console.clear();
    if (this.time > 0) {
      console.log(this.time);
      setTimeout(this.makeIteration, 1000); // 1 second waiting

    } else if (this.time === 0) {
      // console.log("Time is over");
      this.isShowCountdown = false;
      this.isShowQuestion = true;
    }
    console.log(this.time);
    this.time -= 1;
  };

  selectAnswer() {
    this.isShowResultQuestion = true;
    this.isSelectAnswer = true;
  }

  renderResultQuestion() {
    this.isSelectAnswer  = false;
  }

}
