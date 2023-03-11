import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  constructor(private authService:AuthService) {}
  // ngOnInit(): void {
  //   this.isShowNavBar= this.authService.isShowNavBar;
  // }

  // user$?: Observable<User>;
  // constructor(
  //   private store: Store<{
  //     // counter: CounterState,
  //     // calculator: CalculatorState;
  //     // articles: ArticlesState;
  //     auth: AuthState
  //   }>,
  //   // private chatService: ChatService
  // ) {
  //   this.store.select((state) => state.auth.user).forEach((user:any)=>{
  //     this.user$=user;
  //     console.log('user:',  user);
  //     this.display=user?.reloadUserInfo?.displayName;
  //     // console.log('user:', typeof user?.reloadUserInfo);
  //     // console.log('user:',  user?.reloadUserInfo);
  //   });

  //   // this.count$ = this.store.select((state) => state.counter.count);
  //   // this.currentNumber$ = this.store.select(
  //   //   (state) => state.calculator.currentNumber
  //   // );
  //   // this.articles$ = this.store.select((state) => state.articles.list);

  // }
}
