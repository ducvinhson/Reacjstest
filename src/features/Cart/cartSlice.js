import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
      showMiniCart: false,
      cartItems: [],

  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    HideMiniCart(state) {
        state.showMiniCart = false;
    },
    addToCart(state,action) {
        
    }
  },
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, HideMiniCart } = actions;
export default reducer;
