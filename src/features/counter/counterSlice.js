//actions + reducers dans le meme fichier : slice
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  // Nom du slice
  name: "counter",
  //etat initial
  initialState: {
    count: 0,
  },
  //definir des actions
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
