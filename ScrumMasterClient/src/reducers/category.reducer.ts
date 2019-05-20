import { ICategoryState } from ".";
import { progressTypes } from "../actions/category.action";
import { QuestionType } from "../model/QuestionType";



const initialState: ICategoryState = {
  categoryList: [new QuestionType(0,"no")],
  
}

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case progressTypes.GET_CATEGORIES:
      return {
        ...state,
        categoryList: action.payload.body
      }
    default:
      break;
  }
  return state;
}