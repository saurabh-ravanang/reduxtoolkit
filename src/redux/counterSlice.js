import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  cartItems: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {

    //     state.value<=0?0:state.value -=1
    // },
    // reset: (state) => {
    //   state.value = 0
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += Number(action.payload)
    // },

    increment: (state, action) => {
      const product = action.payload;
      const existingItem = state.cartItems.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },

    decrement: (state, action) => {
      const productId = action.payload;
      const itemIndex = state.cartItems.findIndex(item => item.id === productId);

      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1;
        } else {
          state.cartItems.splice(itemIndex, 1); // Remove if quantity is 1
        }
      }
    },






  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer