import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter-slice";
import { resultReducer } from "./result-slice";
import { usersReducer } from "./users-slice";

const store = configureStore({
  reducer: {
    ctr: counterReducer,
    res: resultReducer,
    users: usersReducer,
  },
});

export default store;
