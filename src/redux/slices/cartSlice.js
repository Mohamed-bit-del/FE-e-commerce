import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.cartItem.find((cartItem) => cartItem.productID === item._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItem.push({ productID: item._id, price: item.price, quantity: 1 });
      }
      state.totalQuantity = state.cartItem.reduce((total, item) => total + item.quantity, 0);
    },

    removeItem: (state, action) => {
      state.cartItem = state.cartItem.filter((item) => item.productID !== action.payload.productID);
      state.totalQuantity = state.cartItem.reduce((total, item) => total + item.quantity, 0);
    },
  },
});

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
