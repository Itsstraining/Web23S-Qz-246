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
import { questionReducer } from './ngrx/reducer/question.reducer';
import { UserEffect } from './ngrx/effects/user.effect';
import { SocketIoModule } from 'ngx-socket-io';
import { playerReducer } from './ngrx/reducer/player.reducer';
import { roomReducer } from './ngrx/reducer/room.reducer';
const config = { url: 'http://localhost:3000', options: {} };
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      question: questionReducer,
    }, {}),
    EffectsModule.forRoot([

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
      quiz: questionReducer,
      room: roomReducer
    }),
    EffectsModule.forRoot([UserEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
