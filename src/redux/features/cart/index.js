import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, {payload}) => {
      const count = state[payload.id] ? state[payload.id].count : 0;

      if (count === 30) {
        return;
      }

      if (count === 0) {
        state[payload.id] = {
          ...payload,
          count: 1
        }
      }

      state[payload.id].count = count + 1;
    },
    decrement: (state, {payload}) => {
      const count = state[payload] ? state[payload].count : 0;

      if (!count) {
        return;
      }

      if (count === 1) {
        delete state[payload];
        return;
      }

      state[payload].count = count - 1;
    },
    remove: (state, {payload}) => {
      const count = state[payload] ? state[payload].count : 0;

      if (!count) {
        return;
      }

      delete state[payload];

      return;
    },
    reset: () => initialState,
  }
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
