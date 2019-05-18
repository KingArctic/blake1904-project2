import { combineReducers } from "redux";
import { User } from "../model/user";
import { authReducer } from "./auth.reducer";

// This is our User State
export interface IAuthState {
  currentUser?: User,
  errorMessage?: string
} 
//this connects states to props
export interface IState {
  auth: IAuthState
}
//this connects reducers and states
export const state = combineReducers<IState>({
  auth: authReducer,
})