import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { Room } from "src/models/room.model";
import * as RoomActions from '../actions/room.action';

@Injectable()
export class RoomEffect {
  constructor(private actions$: Actions, private http: HttpClient) { }

  getRoomByCreateId$ = createEffect(
    () => this.actions$.pipe(
      ofType(RoomActions.getRoomByPin),
      switchMap((action) => {
        return this.http.get(`https://web23s-qz-ew2i3if7na-de.a.run.app/room/${action.pin}`);
      }),
      map((data) => {
        return RoomActions.getRoomByPinSuccess({ room: <Room>data });
      }),
      catchError((error) => {
        return of(RoomActions.getRoomByPinFailure({ error: error.message }));
      }),
    )
  )
  addNewRoom$ = createEffect(
    () => this.actions$.pipe(
      ofType(RoomActions.addNewRoom),
      switchMap((action) => {
        console.log("client",action.room);
        return this.http.post(`https://web23s-qz-ew2i3if7na-de.a.run.app/room/`, action.room);
      }
      ),
      map((data) => {
        return RoomActions.addNewRoomSuccess({ room: <Room>data });
      }),
      catchError((error) => {
        return of(RoomActions.addNewRoomFailure({ error: error.message }));
      }),
    )
  )
  updateRoom$ = createEffect(
    () => this.actions$.pipe(
      ofType(RoomActions.updateRoom),
      switchMap((action) => {
        return this.http.put(`https://web23s-qz-ew2i3if7na-de.a.run.app/${action.room.id}`, action.room);
      }
      ),
      map((data) => {
        return RoomActions.updateRoomSuccess({ room: <Room>data });
      }
      ),
      catchError((error) => {
        return of(RoomActions.updateRoomFailure({ error: error.message }));
      }),
    )
  )
}
