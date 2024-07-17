import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootSlice from "./rootSlice";

const reducer = combineReducers({
  root: rootSlice,
});

const store = configureStore({
  reducer,
});

export default store;
