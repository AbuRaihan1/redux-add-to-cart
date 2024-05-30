import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const cartDrawerSlice = createSlice({
  name: "cartDrawer",
  initialState,
  reducers: {
    handleDrawerOpen: (state) => {
      state.isOpen = true;
    },
    handleDrawerClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { handleDrawerOpen, handleDrawerClose } = cartDrawerSlice.actions;
export default cartDrawerSlice.reducer;
