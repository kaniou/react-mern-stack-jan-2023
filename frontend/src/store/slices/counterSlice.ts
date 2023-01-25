import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type stateProp = {
  count: number;
};
const defaultState: stateProp = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: defaultState,
  reducers: {
    add: (state) => {
      state.count = state.count + 1;
    },
    delete: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const {add, delete} = counterSlice.actions;
export default counterSlice.reducer;
export const counterSelector = (state: RootState) => state.counterReducer;
