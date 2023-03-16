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
  playerListData?: Player[] ;
  playerData$?: Observable<Player|null>;
  currentIndex = 1;
  isShowRank = false;
  infoPlayer!: Player;
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
    this.playerList$.subscribe((data) => {
      this.playerListData = data;
    })
    this.questionData$.subscribe((data) => {
      this.scoreQuestion = data?.point || 0;
      // // console.log("scoreQuestion", this.scoreQuestion)
    })
    this.playerData$ = this.store.select((state) => state.player.player);
    this.playerData$.subscribe((data:any) => {
      this.infoPlayer = data;
      // // console.log("infoPlayer", this.infoPlayer)
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
      // // console.log("infoPlayer", this.infoPlayer)
    }
    // console.log(this.time);
    this.time -= 1;
  };

  renderResultQuestion() {
    this.isSelectAnswer = false;
  }

  getNextQuestion() {
    this.playerService.nextQuestion().subscribe((question: any) => {
      // this.questionService.questionSelected = question;
      this.store.dispatch(QuestionActions.updateSeleceQuestion({question: question}))
      // console.log("join-game", this.playerService.playerList)
      this.playerList$?.subscribe((data) => {
        // // console.log("join-game-player-list555", data)
        this.playerListData = data;
      })
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
      this.scorePlayer = this.infoPlayer.score;
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
            // console.log("selectAnswer-list-player", data)
            // this.playerService.playerList.forEach((player: Player) => {
            // this.infoPlayer!.score += this.scoreQuestion;
            // this.infoPlayer!.correctAnswer++

            this.infoPlayer={
              id: this.infoPlayer?.id,
              name: this.infoPlayer?.name,
              score: this.infoPlayer?.score + this.scoreQuestion,
              correctAnswer: this.infoPlayer?.correctAnswer + 1
            }

            // // console.log("infoPlayer-player", this.infoPlayer)
            this.store.dispatch(PlayerActions.updatePlayer({player: this.infoPlayer as Player}))
            this.playerList$?.subscribe((data) => {
            //   data?.forEach((player: Player) => {
            //     // this.playerService.playerList.forEach((player: Player) => {

            //       // console.log(player.name)
            //       // if (player.id === this.playerService.playerCurrent.id &&
            //       //   player.name === this.playerService.playerCurrent.name) {
            //       if (player.id === this.infoPlayer?.id &&
            //         player.name === this.infoPlayer.name) {
            //         console.log("selectAnswer-player", player)
            //         // this.tempInfoPlayer = player;
            //         // player.score += this.questionData!.point;
            //         player.score += this.scoreQuestion;
            //         player.correctAnswer++
            //         console.log("selectAnswer-point+++", player)
            //         }
            //       });
                this.playerListData = data;
                // // console.log("selectAnswer-player-list", this.playerListData)
                });

                this.playerData$?.subscribe((data) => {
                  this.infoPlayer = data as Player;
                })

              // this.playerList$?.subscribe((data) => {
                this.playerService.sendPlayerListUpdate(this.playerListData);
              // })

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
      this.playerList$?.subscribe((data) => {
        // // console.log("join-game-player-rank", data)
        this.playerListData = data;
      })
      let index = playerList.findIndex((player: Player) => player.name === this.playerService.playerCurrent.name)
      // this.infoPlayer = this.playerService.playerCurrent
      this.rank = index + 1
    });
  }
}
