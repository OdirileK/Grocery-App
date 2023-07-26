
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartList: [],
    total: 0,
  },
  reducers: {
    
    handleAddToCart: (state, action) => {
        const data = action.payload;
      if (state.cartList.length === 0) {
        state.cartList.push(data);
      
      } else {
        const existingItem = state.find((item) => item.id === data.id);
        existingItem.quantity += 1;
      }
    },
  },
});

export const { handleAddToCart } = cartSlice.actions;
export default cartSlice.reducer;
