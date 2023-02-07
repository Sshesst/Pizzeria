import { configureStore } from "@reduxjs/toolkit";
import filtration from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    filtration
  }
});
