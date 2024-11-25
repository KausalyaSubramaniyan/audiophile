import { createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../services/CartApi";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    fetched: false,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      cartApi.endpoints.fetchItems.matchFulfilled,
      (state, { payload }) => {
        state.items = payload;
        state.fetched = true;
      }
    );
  },
});
