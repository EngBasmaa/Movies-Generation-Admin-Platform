import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 50 },
  reducers: {
    // reducers :==> action creator method => createAction automatically
    increaseAction: (state, action) => {
      console.log("Action:", action);
      state.count += action.payload;
    },
    decreaseAction: (state, action) => {
      console.log("Action:", action);
      state.count -= action.payload;
    }
  }
});

export const counterReducer = counterSlice.reducer;
export const counterActions = counterSlice.actions;
