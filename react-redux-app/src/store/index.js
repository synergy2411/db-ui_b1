import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter-slice";
import { resultReducer } from "./result-slice";

const store = configureStore({
  reducer: {
    ctr: counterReducer,
    res: resultReducer,
  },
});

export default store;
