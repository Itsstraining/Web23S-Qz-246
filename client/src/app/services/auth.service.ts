import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth, authState, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserModel } from '../models/user.model';
import { UserState } from '../ngrx/states/user.state';
import * as UserActions from '../ngrx/actions/user.action';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userInfo: any;
  public baseURL:string = environment.baseURL+'users/';
  constructor(
    private auth: Auth,
    private http: HttpClient,
    private router: Router,
    private authStore: Store<{ auth: UserState }>,
  ) {
    authState(this.auth).subscribe((user) => {
      if (user) {
        let account: UserModel = {
          id: user?.uid,
          displayName: user?.displayName,
          email: user?.email,
          photoURL: user?.photoURL,
        };
        this.authStore.dispatch(UserActions.loginSuccess({ user: account }));
        this.userInfo = account;
        console.log(account);
      }
    });
  }
  async loginWithGoogle() {
    let provider = new GoogleAuthProvider();
    return new Promise<UserModel>(async (resolve, reject) => {
      try{
        let result = await signInWithPopup(this.auth, provider);
        if(result){
          let user: UserModel = {
          id  : result.user?.uid,
          displayName: result.user?.displayName,
          email: result.user?.email,
          photoURL: result.user?.photoURL,
        };
        console.log('data'+result.user?.uid);
        resolve(user);
        this.router.navigate(['home']);
        this.http
        .post(this.baseURL + 'signin', {
          userid: user.id,
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
  