import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { movieReducer } from "./movieSlice";

export const store = configureStore({
  reducer: {
    counterSlice: counterReducer,
    movieSlice: movieReducer
  },
  devTools: true
});
