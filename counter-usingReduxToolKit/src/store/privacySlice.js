import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (store) => {
      return (store = !store);
    },
  },
});

export default privacySlice;

export const privacySliceAction = privacySlice.actions;
