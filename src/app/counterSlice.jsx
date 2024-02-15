import { createSlice } from "@reduxjs/toolkit";


let initialState = {
  count: 0
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers:{
    increment: (state) =>{
      state.count += 1
    },
    decrement: (state) =>{
      state.count -= 1
    },
    reset: (state) =>{
      state.count = 0
    },
    addValue: (state, {payload}) =>{
      state.count += payload
    }
  }
})

export const {increment, decrement, reset, addValue} = counterSlice.actions;
export const CounterReducer = counterSlice.reducer