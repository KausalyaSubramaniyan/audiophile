import { createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../services/CartApi";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    bill: {},
    fetched: false,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      cartApi.endpoints.getCart.matchFulfilled,
      (state, { payload }) => {
        state.items = payload.items;
        state.bill = payload.bill;
        state.fetched = true;
      }
    );
  },
});
