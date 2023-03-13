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
import { NavBarNewComponent } from './components/nav-bar-new/nav-bar-new.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarNewComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      // question: questionReducer,
    }, {}),
    EffectsModule.forRoot([

    ]),
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    StoreModule.forRoot({
      user: userReducer
    }),
    // EffectsModule.forRoot([UserEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
