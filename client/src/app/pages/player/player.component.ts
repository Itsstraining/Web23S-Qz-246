import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PlayerState } from 'src/app/ngrx/states/player.state';
import { QuestionState } from 'src/app/ngrx/states/question.state';
import { PlayerService } from 'src/app/services/player.service';
import { QuestionService } from 'src/app/services/question.service';
import { Answer } from 'src/models/answer.model';
import { Player } from 'src/models/player.model';
import { Question } from 'src/models/question.model';
import * as PlayerActions from '../../ngrx/actions/player.action';
import * as QuestionActions from '../../ngrx/actions/question.action';
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

  questionList$?: Observable<Question[]>;
  questionData$?: Observable<Question|null>;;
  playerList$?: Observable<Player[]>;
  playerData$?: Observable<Player|null>;
  currentIndex = 1;
  isShowRank = false;
  infoPlayer!: Player|null;
  rank = 0;
  scorePlayer = 0;
  scoreQuestion = 0;
  listIcon = [
    "square",
    "circle",
    "triangle",
    "rhombus"];
  lengthQuestions = this.questionService.questionLength;
  constructor(private playerService: PlayerService,
    private questionService: QuestionService,
    private store: Store<{
      question: QuestionState,
      player: PlayerState
    }>) {
    this.questionList$ = this.store.select((state) => state.question.questions);
    // this.questionList$.subscribe((data) => {
    //   this.questionData = data[0];
    //   this.lengthQuestions = data.length;
    // })
    this.questionData$ = this.store.select((state) => state.question.selectedQuestion);
    this.playerList$ = this.store.select((state) => state.player.players);
    this.questionData$.subscribe((data) => {
      this.scoreQuestion = data?.point || 0;
    })
    this.playerData$ = this.store.select((state) => state.player.player);
    this.playerData$.subscribe((data:any) => {
      this.infoPlayer = data;
    })
    // this.playerData =this.store.select((state) => state.player.player);
  }

  ngOnInit() {
    this.time = 6;
    // this.infoPlayer = this.playerService.playerCurrent;
    // this.infoPlayer = (this.playerData$) as Player;
    this.makeIteration();
    this.isShowCountdown = true;
    this.isResultScreen = false;
    this.isShowRank = false;
    // this.questionData = this.questionService.questionSelected;
    this.getNextQuestion()
    this.getShowQuestionCorrect()
    // this.getPlayerList()
    this.showRank()
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
    this.playerService.nextQuestion().subscribe((question: any) => {
      this.questionService.questionSelected = question;
      this.currentIndex++;
      // this.questionData = this.questionService.questionSelected;
      this.isShowCountdown = true;
      this.isQuestionScreen = false;
      this.isResultScreen = false;
      this.time = 6;
      // this.infoPlayer = this.playerService.playerCurrent;
      this.makeIteration()
    });
  }

  // getPlayerList() {
  //   this.playerService.getPlayerList().subscribe((playerList: any) => {
  //     this.playerService.playerList = playerList;
  //     console.log("getPlayerList", this.playerService.playerList)
  //     // this.playerService.updatePlayerList(playerList)
  //   }
  //   )
  // }

  getShowQuestionCorrect() {
    this.playerService.showQuestionCorrect().subscribe((question: any) => {
      // console.log("ssss")
      // console.log(this.isAnwerCorrect)
      this.isSelectAnswer = false;
      this.isResultScreen = true;
      // this.scorePlayer = this.playerService.playerCurrent.score;
      this.playerData$?.subscribe((data) => {
        this.scorePlayer = data?.score || 0;
      })
    });
  }

  tempInfoPlayer?: Player;
  selectAnswer(item: any) {
    this.isResultScreen = true;
    this.isSelectAnswer = true;
    // console.log("selectAnswer",item)
    // this.isQuestionScreen = false;
    this.questionData$?.subscribe((data) => {
      data?.answers.forEach((answer: any) => {
        if (answer.id == item.id) {
          if (answer.isCorrect) {
            // console.log(answer.id)
            // console.log(item.id)
            this.isAnwerCorrect = true;
            // console.log("selectAnswer", this.playerService.playerList)
            console.log("selectAnswer", data)
            // this.playerService.playerList.forEach((player: Player) => {
            this.playerList$?.subscribe((data) => {
              data?.forEach((player: Player) => {
                // this.playerService.playerList.forEach((player: Player) => {

                  // console.log(player.name)
                  // if (player.id === this.playerService.playerCurrent.id &&
                  //   player.name === this.playerService.playerCurrent.name) {
                  if (player.id === this.infoPlayer?.id &&
                    player.name === this.infoPlayer.name) {
                    console.log("selectAnswer", player)
                    // this.tempInfoPlayer = player;
                    // player.score += this.questionData!.point;
                    player.score += this.scoreQuestion;
                    player.correctAnswer++
                    }
                  });
                });

            this.playerService.sendPlayerListUpdate(this.playerList$)
          } else {
            this.isAnwerCorrect = false;
          }
        }
      });
    })
    // this.questionData$.answers.forEach((answer: any) => {
    //   if (answer.id == item.id) {
    //     if (answer.isCorrect) {
    //       // console.log(answer.id)
    //       // console.log(item.id)
    //       this.isAnwerCorrect = true;
    //       console.log("selectAnswer", this.playerService.playerList)
    //       this.playerService.playerList.forEach((player: Player) => {
    //         // console.log(player.name)
    //         if (player.id === this.playerService.playerCurrent.id &&
    //           player.name === this.playerService.playerCurrent.name) {
    //           console.log("selectAnswer", player)
    //           // this.tempInfoPlayer = player;
    //           player.score += this.questionData!.point;
    //           player.correctAnswer++
    //         }
    //       });
    //       this.playerService.sendPlayerListUpdate()
    //     } else {
    //       this.isAnwerCorrect = false;
    //     }
    //   }
    // });
  }

  showRank() {
    this.playerService.showRanking().subscribe((playerList: any) => {
      this.isQuestionScreen=false;
      this.isShowRank = true;
      this.isResultScreen = false;
      // this.playerService.updatePlayerList(playerList)
      this.store.dispatch(PlayerActions.updatePlayers({players: playerList }))
      let index = playerList.findIndex((player: Player) => player.name === this.playerService.playerCurrent.name)
      // this.infoPlayer = this.playerService.playerCurrent
      this.rank = index + 1
    });
  }
}
