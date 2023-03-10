import { createAction, props } from "@ngrx/store";
import { UserModel } from "src/app/models/user.model";


export const login=createAction('[User] Login');
export const loginSuccess=createAction('[User] Login Success',props<{user:UserModel}>());
export const loginFailure=createAction('[User] Login Failure',props<{error:string}>());

export const logout=createAction('[User] Logout');
export const logoutSuccess=createAction('[User] Logout Success');
export const logoutFailure=createAction('[User] Logout Failure',props<{error:string}>());

