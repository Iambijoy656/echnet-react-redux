import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./features/cart/CartSlice"


const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// for typeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
