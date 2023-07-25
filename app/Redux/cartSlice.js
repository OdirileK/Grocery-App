// // cartSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: [],
//   reducers: {
//     addToCart: (state, action) => {
//       const foodData = action.payload;
//       const existingItem = state.find((item) => item.id === foodData.id);

//       if (existingItem) {
//         // If the item already exists in the cart, update the counter
//         existingItem.quantity += 1;
//       } else {
//         // If the item is not in the cart, add it with a quantity of 1
//         state.push({ ...foodData, quantity: 1 });
//       }
//     },
//   },
// });

// export const { addToCart } = cartSlice.actions;
// export default cartSlice.reducer;
