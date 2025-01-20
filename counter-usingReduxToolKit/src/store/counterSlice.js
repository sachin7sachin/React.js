import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterValue: 0 },
  reducers: {
    increment: (store) => {
      store.counterValue++;
    },
    decrement: (store) => {
      store.counterValue--;
    },
    add: (store, action) => {
      store.counterValue += Number(action.payload);
    },
    subtract: (store, action) => {
      store.counterValue -= Number(action.payload);
    },
  },
});

export default counterSlice;

export const counterSliceAction = counterSlice.actions;
