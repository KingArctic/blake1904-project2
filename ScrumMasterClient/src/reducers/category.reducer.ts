import { ICategoryState } from ".";
import { progressTypes } from "../actions/category.action";
import { QuestionType } from "../model/QuestionType";



const initialState: ICategoryState = {
  categoryList: [new QuestionType(0,"no")],
  currentCategory: new QuestionType(1,"JavaScript"),
  categoryName: 0,
}

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case progressTypes.GET_CATEGORIES:
      return {
        ...state,
        categoryList: action.payload.body,
      }
      case progressTypes.SET_CATEGORY:
      return{
        ...state,
        currentCategory: action.payload.body
      }
      case progressTypes.NAME_CATEGORY:
        return{
          ...state,
          categoryName: action.payload.body
        }
    default:
      break;
  }
  return state;
}