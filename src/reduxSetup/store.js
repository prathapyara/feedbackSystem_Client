import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducer/authReducer.js";
import {thunk} from "redux-thunk";

const data=localStorage.getItem("userInfo")

const preloadedState = {
  auth: { user: data || null},
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
