import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    cart: JSON.parse(localStorage.getItem('localCart')) || [],
    cartItemCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (oneCart) => oneCart.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        localStorage.setItem('localCart', JSON.stringify(state.cart));
      }
      state.cartItemCount += 1;
    },

    removeToCart: (state, action) => {
      const removedCart = state.cart.filter(
        (oneCart) => oneCart.id !== action.payload.id
      );
      localStorage.setItem('localCart', JSON.stringify( removedCart))
      state.cart = removedCart;
    },

    // cart item count handler
    handleCartItemIncrease: (state, action) => {
      const selectedItemIncrease = state.cart.find(
        (slctCart) => slctCart.id === action.payload
      );

      if (selectedItemIncrease) {
        selectedItemIncrease.quantity += 1;
        state.cartItemCount += 1;
      } else {
        console.log("Item not found");
      }
    },

    handleCartItemDecrease: (state, action) => {
      const selectItemDecrease = state.cart.find(
        (slctCart) => slctCart.id === action.payload
      );
      if (selectItemDecrease) {
        selectItemDecrease.quantity -= 1;
        if (selectItemDecrease.quantity < 1) {
          selectItemDecrease.quantity = 1;
        }
      } else {
        console.log("item not found");
      }
    },
  },
});

export const {
  addToCart,
  removeToCart,
  handleCartItemDecrease,
  handleCartItemIncrease,
} = addToCartSlice.actions;
export default addToCartSlice.reducer;
