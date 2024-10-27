import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item Added Succesfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    removeFromCart : (state , action) =>{
        state.cartItems = state.cartItems.filter(items => items._id !== action.payload._id)
    },
    clearCart : (state) => {
        state.cartItems = []
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item._id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart ,removeFromCart , clearCart  ,incrementQuantity , decrementQuantity} = cartSlice.actions;

export default cartSlice.reducer;
