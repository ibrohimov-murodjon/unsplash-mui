import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "../redux/features/gallerySlice";

const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
});

export default store;
