// redux/gallerySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
});

export const {} = gallerySlice.actions;
export default gallerySlice.reducer;
