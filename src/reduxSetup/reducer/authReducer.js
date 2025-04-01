import { USER_DATA, USER_LOGOUT } from "../constants/constants.js"

const initialState = { user: null }; // Default fallback state

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        user: action.payload.user || null,
      };
    case USER_LOGOUT:{
      return {
        user:action.payload.user
      }
    }  
    default:
      return state;
  }
};