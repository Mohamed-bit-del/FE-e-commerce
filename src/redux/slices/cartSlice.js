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
      const existingItem = state.cartItem.find(
        (cartItem) => cartItem.product_id === item.product_id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItem.push({
          product_id: item.product_id,
          quantity: 1,
          product_price: item.product_price,
        });
      }
      state.totalQuantity = state.cartItem.reduce((total, item) => total + item.quantity, 0);
    },

    removeItem: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.product_id !== action.payload.product_id
      );
      state.totalQuantity = state.cartItem.reduce((total, item) => total + item.quantity, 0);
    },
  },
});

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
