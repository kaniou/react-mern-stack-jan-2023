import { createSlice } from "@reduxjs/toolkit";

type stateProp = {
  count: number;
};
const defaultState: stateProp = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: defaultState,
  reducers: {},
});

export const {} = counterSlice.actions;
export default counterSlice.reducer;
