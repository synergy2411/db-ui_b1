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
    onAddCounter(state, action) {
      state.counter = state.counter + action.payload;
    },
    onSubtractCounter(state, action) {
      state.counter = state.counter - action.payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const { onIncrement, onDecrement, onAddCounter, onSubtractCounter } =
  counterSlice.actions;
