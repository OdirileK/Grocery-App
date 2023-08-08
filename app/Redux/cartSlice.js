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
                state.cartList.push({ ...data, quantity: 1, price: data.price });
                // console.log('New item added to cart', updateTotal);
                updateTotal(state);
            } else {
                existingItem.quantity += 1;
                existingItem.price = existingItem.quantity * data.price; // Calculate the new price based on the updated quantity

                // console.log('Item quantity increased');
                updateTotal(state);
            }

            // console.log(state.cartList)

            if (state.cartList.length !== 0) {
                state.total = 0;
                for (let i = 0; i < state.cartList.length; i++) {
                    state.total += state.cartList[i].price;
                    console.log('the price', state.cartList[i].price);
                }
            }


        },
        decrementQuantity: (state, action) => {
            const data = action.payload;
            const existingItem = state.cartList.find((item) => item.id === data.id);

            if (existingItem) {
                existingItem.quantity -= 1;
                existingItem.price = existingItem.quantity * data.price;

                if (existingItem.quantity === 0) {
                    // Remove the item from the cartList if its quantity becomes zero
                    state.cartList = state.cartList.filter((item) => item.id !== data.id);
                }

                updateTotal(state);
            }

            if (state.cartList) {
                state.total = 0;
                for (let i = 0; i < state.cartList.length; i++) {
                    state.total += state.cartList[i].price;
                    console.log('the price', state.cartList[i].price);
                }
            }
            
        },

        clearCart: (state) => {
            state.cartList = [];
            state.total = 0;
            console.log('we are clearing',state)
            updateTotal(state)
          },

        updateTotal: (action, state) => {
            console.log(state.cartList)
        }
    },
});

export const { handleAddToCart, updateTotal, decrementQuantity, incrementCartItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
