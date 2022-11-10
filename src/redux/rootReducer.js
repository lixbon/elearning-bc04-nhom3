import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import courseReducer from "./courseReducer";

export const rootReducer = combineReducers({
  userReducer,
  courseReducer,
});
