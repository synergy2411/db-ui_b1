import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    onIncrement(state, action) {
      state.counter = state.counter + 1;
    },
    onDecrement(state, action) {
      state.counter = state.counter - 1;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { onIncrement, onDecrement } = counterSlice.actions;
