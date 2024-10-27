import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "../redux/features/Cart/cart-slice"

export const store = configureStore({
  reducer: {
    cart:cartSlice
  },
}) 