import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeToCart: (state, action) => {
      //   state.cart = state.cart.filter(state.id !== action.payload.id);
      const removedCart = state.cart.filter(
        (oneCart) => oneCart.id !== action.payload.id
      );
      state.cart = removedCart;
    },
  },
});

export const { addToCart, removeToCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;
