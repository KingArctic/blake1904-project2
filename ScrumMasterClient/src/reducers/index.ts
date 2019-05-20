import { combineReducers } from "redux";
import { User } from "../model/user";
import { authReducer } from "./auth.reducer";
import { QuestionType } from "../model/QuestionType";
import { categoryReducer } from "./category.reducer";

// This is our User State
export interface IAuthState {
  currentUser?: User,
  errorMessage?: string
} 
// This is our Category State
export interface ICategoryState {
  categoryList: QuestionType[],
  currentCategory : QuestionType,
  categoryName: number,
} 
//this connects states to props
export interface IState {
  auth: IAuthState;
  category: ICategoryState;
}
//this connects reducers and states
export const state = combineReducers<IState>({
  auth: authReducer,
  category: categoryReducer
})