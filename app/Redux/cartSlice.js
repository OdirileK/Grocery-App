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
            const existingItem = state.cartList.find((item) => item.id === data.id);

            if (!existingItem) {
                state.cartList.push({ ...data, quantity: 1 });
                // console.log('New item added to cart', updateTotal);
                updateTotal(state)
            } else {
                existingItem.quantity += 1 ;
                existingItem.price += existingItem.price ;
                // console.log('Item quantity increased');
                updateTotal(state)

            }
            // console.log(state.cartList)

            if(state.cartList.length !== 0){
                    for (let i = 0; i < state.cartList.length; i++) {
                        state.total += state.cartList[i].price
                        console.log('the price', state.cartList[i].price)
                      }
                   }
        },
       
        updateTotal: (action,state) => {
            console.log(state.cartList)
        
        }
    },
});

export const { handleAddToCart, updateTotal } = cartSlice.actions;
export default cartSlice.reducer;
