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
  },
});

export const resultReducer = resultSlice.reducer;
export const { storeResult } = resultSlice.actions;
