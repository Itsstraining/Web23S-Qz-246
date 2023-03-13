import { createAction, props } from "@ngrx/store";
import { User } from "../../../models/user.model";


export const login=createAction('[User] Login');
export const loginSuccess=createAction('[User] Login Success',props<{user:User}>());
export const loginFailure=createAction('[User] Login Failure',props<{error:string}>());

export const logout=createAction('[User] Logout');
export const logoutSuccess=createAction('[User] Logout Success');
export const logoutFailure=createAction('[User] Logout Failure',props<{error:string}>());

export const register=createAction('[User] Register');
export const registerSuccess=createAction('[User] Register Success',props<{user:User}>());
export const registerFailure=createAction('[User] Register Failure',props<{error:string}>());

export const getUser=createAction('[User] Get User');
export const getUserSuccess=createAction('[User] Get User Success',props<{user:User}>());
export const getUserFailure=createAction('[User] Get User Failure',props<{error:string}>());

export const updateUser=createAction('[User] Update User');
export const updateUserSuccess=createAction('[User] Update User Success',props<{user:User}>());
export const updateUserFailure=createAction('[User] Update User Failure',props<{error:string}>());
