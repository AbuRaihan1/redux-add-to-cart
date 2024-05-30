import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./features/AddToCartSlice";
import removeToCartReducer from "./features/AddToCartSlice";

export const store = configureStore({
  reducer: {
    addToCart: addToCartReducer,
    removeToCart: removeToCartReducer,
  },
});
