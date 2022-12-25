import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModel: false,
  items: [],
  totalCartPrice: 0,
  totalQuantity: 0,
};



const CartModel = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCartModel: (state) => {
      state.showModel = true;
    },
    hideCartModel: (state) => {
      state.showModel = false;
    },
    addToCart: (state, action) => {
      const newItems = action.payload;
      const newItemPrice = newItems.price;
      const existingItem = state.items.find((item) => item.id === newItems.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.totalCartPrice = state.totalCartPrice + newItemPrice;
        state.items.push({
          id: newItems.id,
          name: newItems.name,
          totalPrice: newItems.price,
          image: newItems.image,
          quantity: 1,
          price: newItems.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = Number(
          existingItem.totalPrice + newItems.price
        );
        state.totalCartPrice = state.totalCartPrice + newItems.price;
      }
    },
    removeFromCart: (state, action) => {
      const newItems = action.payload;
      const existingItem = state.items.find((item) => item.id === newItems.id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.totalCartPrice = state.totalCartPrice - newItems.price;
        state.items = state.items.filter((item) => item.id !== existingItem.id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = Number(
          existingItem.totalPrice - newItems.price
        );
        state.totalCartPrice = state.totalCartPrice - newItems.price;
      }
    },
    removeItemsfromCart:(state,action)=>{
      const newItems = action.payload;
      const existingItem = state.items.find((item) => item.id === newItems.id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.totalCartPrice = state.totalCartPrice - existingItem.totalPrice;
      state.items = state.items.filter((item) => item.id !== existingItem.id);
    },
  },
});

export default CartModel.reducer;
export const { showCartModel, hideCartModel, addToCart, removeFromCart ,removeItemsfromCart} =
  CartModel.actions;
