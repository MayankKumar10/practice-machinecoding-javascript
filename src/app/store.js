import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./counterSlice";
import { productsReducer } from "./productsSlice";

export const store = configureStore({
  reducer:{
    counter: CounterReducer,
    products: productsReducer
  }
})