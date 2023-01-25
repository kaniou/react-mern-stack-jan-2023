import { createSlice } from "@reduxjs/toolkit";

const defaultState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: defaultState,
  reducers: {},
});

export const {} = counterSlice.actions;
export default counterSlice.reducer;
