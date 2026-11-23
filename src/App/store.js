import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;
