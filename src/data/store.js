import { configureStore } from "@reduxjs/toolkit";
import { cartApi } from "./services/CartApi";
import { productApi } from "./services/ProductApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cartSlice } from "./slices/CartSlice";

export const store = configureStore({
  reducer: {
    [cartApi.reducerPath]: cartApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([cartApi.middleware, productApi.middleware]),
});

setupListeners(store.dispatch);
