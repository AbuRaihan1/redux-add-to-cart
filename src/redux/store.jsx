import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/AddToCartSlice";
import drawerReducer from "./features/CartDrawerSlice";
export const store = configureStore({
  reducer: {
    cartStore: CartReducer,
    drawerStore: drawerReducer,
  },
});
