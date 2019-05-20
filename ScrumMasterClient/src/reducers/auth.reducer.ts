import { IAuthState } from ".";
import { authTypes } from "../actions/auth.actions";
import { progressTypes } from "../actions/category.action";


const initialState: IAuthState = {
  currentUser: undefined,
  errorMessage: undefined
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.FAILED_TO_LOGIN:
      return {
        ...state,
        errorMessage: 'Failed to Login try again later.'
      }
    case authTypes.INVALID_CREDENTIALS:
      return {
        ...state,
        errorMessage: 'Invalide Credentials'
      }
    case authTypes.LOGGED_IN:
      return {
        ...state,
        currentUser: action.payload.user,
      }
    // case progressTypes.UPDATE_USER:
    //   return {
    //     ...state,
    //     currentUser: action.payload.updatedUser,

    //   }
    default:
      break;
  }
  return state;
}