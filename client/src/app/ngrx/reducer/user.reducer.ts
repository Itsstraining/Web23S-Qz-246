import { createReducer, on } from "@ngrx/store";
import { UserState } from "../states/user.state";
import * as UserActions from '../actions/user.action';


const initialState: UserState = {
    users: [],
    user: null,
    loading: false,
    error: '',
}
export const userReducer=createReducer(
    initialState,
    on(UserActions.login,(state)=>({...state,loading:true})),
    on(UserActions.loginSuccess,(state,{user})=>({...state,loading:false,user:user})),
    on(UserActions.loginFailure,(state,{error})=>({...state,loading:false,error})),
    )