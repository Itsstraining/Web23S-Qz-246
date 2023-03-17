import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
//ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './ngrx/reducer/user.reducer';
import { SharedModule } from './shared/shared.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconButton } from '@angular/material/button';
import { TaskquizComponent } from './components/taskquiz/taskquiz.component';
import { TrendingComponent } from './components/trending/trending.component';
import { questionReducer } from './ngrx/reducer/question.reducer';
import { UserEffect } from './ngrx/effects/user.effect';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { AnswerInputComponent } from './components/answer-input/answer-input.component';
import { SocketIoModule } from 'ngx-socket-io';
import { playerReducer } from './ngrx/reducer/player.reducer';
import { roomReducer } from './ngrx/reducer/room.reducer';
import { QuizEffects } from './ngrx/effects/quiz.effect';
import { NavBarNewComponent } from './components/nav-bar-new/nav-bar-new.component';
import { quizReducer } from './ngrx/reducer/quiz.reducer';
import { RoomEffect } from './ngrx/effects/room.effect';
const config = { url: 'https://web23s-qz-ew2i3if7na-de.a.run.app', options: {} };
// const config = { url: 'https://web23s-qz-ew2i3if7na-de.a.run.app', options: {} };
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([
      QuizEffects,
      UserEffect,
      RoomEffect
    ]),
    SocketIoModule.forRoot(config),
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    StoreModule.forRoot({
      user: userReducer,
      player: playerReducer,
      question: questionReducer,
      quiz: quizReducer,
      room: roomReducer
    }),
    // EffectsModule.forRoot([UserEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
