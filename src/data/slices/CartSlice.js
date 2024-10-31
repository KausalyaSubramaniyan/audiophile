import { createSlice } from "@reduxjs/toolkit";
import { cartApi } from "../services/CartApi";

// TODO - Should we add all endpoints in matcher?
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      cartApi.endpoints.fetchItems.matchFulfilled,
      (state, { payload }) => {
        state.items = payload;
      }
    );
    builder.addMatcher(
      cartApi.endpoints.addItem.matchFulfilled,
      (state, { payload }) => {
        state.items = [...state.items, payload];
      }
    );
    builder.addMatcher(
      cartApi.endpoints.updateQuantity.matchFulfilled,
      (state, { payload }) => {
        const existingItem = state.items.find(
          (item) => item.name === payload.name
        );
        if (existingItem) {
          existingItem.quantity = payload.quantity;
        } else {
          state.items = [...state.items, payload];
        }
      }
    );
    builder.addMatcher(
      cartApi.endpoints.removeItem.matchFulfilled,
      (state, { payload }) => {
        const items = state.items.filter((item) => item.name !== payload.name);
        state.items = items;
      }
    );
    builder.addMatcher(
      cartApi.endpoints.removeAllItems.matchFulfilled,
      (state, { payload }) => {
        state.items = payload;
      }
    );
  },
});
