import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerService } from 'src/app/services/player.service';
import { QuestionService } from 'src/app/services/question.service';
import { Answer } from 'src/models/answer.model';
import { Player } from 'src/models/player.model';
import { Question } from 'src/models/question.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  time: number = 5;
  // isPreviewScreen = false;
  isShowCountdown = true;
  // isQuestionAnswered = false;
  isSelectAnswer = false;
  // answerCorrect = false;
  isAnwerCorrect = false;
  isQuestionScreen = false;
  isResultScreen = false;

  answerTime = 0;
  showText = false;
  answerSelected?: Answer;

  question$?: Observable<Question | any>;
  questionData?: Question;
  currentIndex = 1;
  isShowRank = false;
  infoPlayer!: Player;
  rank = 0;

  constructor(private playerService: PlayerService,
    private questionService: QuestionService) { }

  ngOnInit() {
    this.time = 6;
    this.makeIteration();
    this.isShowCountdown = true;
    this.isResultScreen = false;
    this.isShowRank = false;
    this.questionData = this.questionService.questionSelected;
    this.getNextQuestion()
    this.getShowQuestionCorrect()
    this.getPlayerList()
    // this.showRank()
  }

  makeIteration = (): void => {
    console.clear();
    if (this.time > 1) {
      // console.log(this.time);
      setTimeout(this.makeIteration, 1000); // 1 second waiting
    } else if (this.time === 1) {
      // console.log("Time is over");
      this.isShowCountdown = false;
      this.isQuestionScreen = true;
    }
    // console.log(this.time);
    this.time -= 1;
  };

  renderResultQuestion() {
    this.isSelectAnswer = false;
  }

  getNextQuestion() {
    this.question$ = this.playerService.nextQuestion();
    this.question$.subscribe((question: any) => {
      this.questionService.questionSelected = question;
      this.currentIndex++;
      this.questionData = this.questionService.questionSelected;
      this.isShowCountdown = true;
      this.isQuestionScreen = false;
      this.isResultScreen = false;
      this.makeIteration()
    });
  }

  getPlayerList() {
    this.playerService.getPlayerList().subscribe((playerList: any) => {
      this.playerService.playerList = playerList;
      console.log("getPlayerList", this.playerService.playerList)
      // this.playerService.updatePlayerList(playerList)
    }
    )
  }

  getShowQuestionCorrect() {
    this.playerService.showQuestionCorrect().subscribe((question: any) => {
      // console.log("ssss")
      // console.log(this.isAnwerCorrect)
      this.isSelectAnswer = false;
      this.isResultScreen = true;
    });
  }

  selectAnswer(item: any) {
    this.isResultScreen = true;
    this.isSelectAnswer = true;
    // console.log("selectAnswer",item)
    this.isQuestionScreen = false;
    this.questionData!.answers.forEach((answer: any) => {
      if (answer.id == item.id) {
        if (answer.isCorrect) {
          // console.log(answer.id)
          // console.log(item.id)
          this.isAnwerCorrect = true;
          console.log("selectAnswer", this.playerService.playerList)
          this.playerService.playerList.forEach((player: Player) => {
            // console.log(player.name)
            if (player.id === this.playerService.playerCurrent.id &&
              player.name === this.playerService.playerCurrent.name) {
              console.log("selectAnswer", player)
              this.playerService.playerCurrent = player;
              player.score += this.questionData!.point;
              player.correctAnswer++
            }
          });
          this.playerService.sendPlayerListUpdate()
        } else {
          this.isAnwerCorrect = false;
        }
      }
    });
  }

  showRank() {
    this.playerService.showRanking().subscribe((playerList: any) => {
      this.isShowRank = true;
      this.isResultScreen = false;
      this.playerService.updatePlayerList(playerList)
      let index = playerList.findIndex((player: Player) => player.name === this.playerService.playerCurrent.name)
      this.infoPlayer = this.playerService.playerCurrent
      this.rank = index + 1
    });
  }
}
