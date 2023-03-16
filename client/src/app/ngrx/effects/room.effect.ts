import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import * as RoomActions from '../actions/room.action';

@Injectable()
export class UserEffect {
    constructor(private actions$ : Actions, private http:HttpClient){}
    // getUser$=createEffect(
    //     ()=>this.actions$.pipe(
    //         ofType(UserActions.login),
    //         switchMap(()=>this.authService.loginWithGoogle()),
    //         map((user)=>{
    //             return UserActions.loginSuccess({user: user});
    //         }),
    //         catchError((error)=>{
    //             return of(UserActions.loginFailure({error: error.message}));
    //         }),
    //     )
    // )
}
