import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: [],
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    storeResult(state, action) {
      state.result.unshift(action.payload);
    },
    deleteResult(state, action) {
      state.result.splice(action.payload, 1);
    },
  },
});

export const resultReducer = resultSlice.reducer;
export const resultActions = resultSlice.actions;
