import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, authState, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {User}  from '../../models/user.model';
import { UserState } from '../ngrx/states/user.state';
import * as UserActions from '../ngrx/actions/user.action';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userInfo!: User|null;
  public baseURL:string = "https://web23s-qz-ew2i3if7na-de.a.run.app/"+'users/';
  constructor(
    private auth: Auth,
    private http: HttpClient,
    private router: Router,
    private authStore: Store<{ auth: UserState }>,
  ) {
    authState(this.auth).subscribe((user) => {
      if (user) {
        let account: User = {
          userid: user?.uid as string,
          displayName: user?.displayName as string,
          email: user?.email as string,
          photoURL: user?.photoURL as string
        };
        this.authStore.dispatch(UserActions.loginSuccess({ user: account }));
        this.userInfo = account;
        console.log(account);
      }
    });
  }

  async loginWithGoogle() {
    let provider = new GoogleAuthProvider();
    return new Promise<User>(async (resolve, reject) => {
      try{
        let result = await signInWithPopup(this.auth, provider);
        if(result){
          let user: User = {
          userid  : result.user?.uid  as string,
          displayName: result.user?.displayName as string,
          email: result.user?.email as string,
          photoURL: result.user?.photoURL as string,
        };
        console.log('data'+result.user?.uid);
        resolve(user);
        this.router.navigate(['home']);
        this.http
        .post(this.baseURL + 'signin', {
          userid: user.userid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
        .subscribe((res) => {
          console.log(res);
        });
        }

      }catch(error){
        reject(null);
      }
    });
  }
  async logoutWithGoogle() {
    return new Promise<string>(async (resolve, reject) => {
      try {
        await this.auth.signOut();
        localStorage.removeItem('userInfo');
        this.authStore.dispatch(UserActions.logout());
        resolve('Logout success');
        this.router.navigate(['home']);
      } catch (error) {
        reject(error);
      }
    });
  }
  // getAllUser(){
  //   return this.http.get(environment.baseURL)
  // }
}
