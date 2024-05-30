import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./features/AddToCartSlice";
import removeToCartReducer from "./features/AddToCartSlice";
import CartDrawerOpenReducer from "./features/CartDrawerSlice";
import CartDrawerCloseReducer from "./features/CartDrawerSlice";

export const store = configureStore({
  reducer: {
    addToCart: addToCartReducer,
    removeToCart: removeToCartReducer,

    handleDrawerOpen: CartDrawerOpenReducer,
    handleDrawerClose: CartDrawerCloseReducer,
  },
});
