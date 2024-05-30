import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./features/AddToCartSlice";
import removeToCartReducer from "./features/AddToCartSlice";
import CartDrawerOpenReducer from "./features/CartDrawerSlice";
import CartDrawerCloseReducer from "./features/CartDrawerSlice";
import CartItemHandleReducer from "./features/CartItemHandler";

export const store = configureStore({
  reducer: {
    addToCart: addToCartReducer,
    removeToCart: removeToCartReducer,

    handleDrawerOpen: CartDrawerOpenReducer,
    handleDrawerClose: CartDrawerCloseReducer,
    CartItemHandler: CartItemHandleReducer,
  },
});
