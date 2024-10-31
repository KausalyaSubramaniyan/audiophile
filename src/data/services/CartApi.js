import { createApi } from "@reduxjs/toolkit/query/react";

const saveItem = (item) => {
  let items = JSON.parse(localStorage.getItem("products"));
  items = items ?? {};

  items[item.name] = {
    amount: item.amount,
    currSymbol: item.currSymbol,
    quantity: item.quantity,
  };
  localStorage.setItem("products", JSON.stringify(items));

  return item;
};

const getItems = (items = JSON.parse(localStorage.getItem("products"))) => {
  if (!items) return [];

  return Object.keys(items).reduce((acc, itemName) => {
    acc.push({
      name: itemName,
      amount: items[itemName].amount,
      currSymbol: items[itemName].currSymbol,
      quantity: items[itemName].quantity,
    });
    return acc;
  }, []);
};

const updateQuantity = (item) => {
  let items = JSON.parse(localStorage.getItem("products"));
  if (!items) return {};

  items[item.name]["quantity"] = item.quantity;
  localStorage.setItem("products", JSON.stringify(items));
  return item;
};

const deleteItem = (item) => {
  let items = JSON.parse(localStorage.getItem("products"));
  if (!items) return {};

  delete items[item.name];
  localStorage.setItem("products", JSON.stringify(items));
  return item;
};

const removeAllItems = () => {
  localStorage.removeItem("products");
  return [];
};

const getMockData = ({ method, url, body }) => {
  switch (`${method} ${url}`) {
    case "POST /cart":
      return {
        data: saveItem(body),
        error: null,
        meta: {},
      };
    case "GET /cart":
      return {
        data: getItems(),
        error: null,
        meta: {},
      };
    case "PUT /cart":
      return {
        data: updateQuantity(body),
        error: null,
        meta: {},
      };
    case "DELETE /cart": {
      return {
        data: deleteItem(body),
        error: null,
        meta: {},
      };
    }
    case "DELETE /cart/all":
      return {
        data: removeAllItems(),
        error: null,
        meta: {},
      };
  }
};

export const cartApi = createApi({
  reducerPath: "cartApi",
  tagTypes: ["Cart"],
  baseQuery: async (args, api, extraOptions) => {
    // TODO - Check this logic
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(getMockData(args));
      }, 1000)
    );
  },
  endpoints: (builder) => ({
    fetchItems: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
      providesTags: ["Cart"],
    }),
    addItem: builder.mutation({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Cart"],
    }),
    updateQuantity: builder.mutation({
      query: (data) => ({
        url: "/cart",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Cart"],
    }),
    removeItem: builder.mutation({
      query: (data) => ({
        url: "/cart",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["Cart"],
    }),
    removeAllItems: builder.mutation({
      query: () => ({
        url: "/cart/all",
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useFetchItemsQuery,
  useAddItemMutation,
  useUpdateQuantityMutation,
  useRemoveItemMutation,
  useRemoveAllItemsMutation,
} = cartApi;
