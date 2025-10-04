import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import productsReducer from './productSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
  },
})