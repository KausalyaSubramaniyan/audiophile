import { createApi } from "@reduxjs/toolkit/query/react";

const saveItem = (item) => {
  let items = JSON.parse(localStorage.getItem("products"));
  items = items ?? {};

  items[item.id] = {
    name: item.name,
    amount: item.amount,
    currSymbol: item.currSymbol,
    quantity: item.quantity,
    imgUrl: item.imgUrl,
  };
  localStorage.setItem("products", JSON.stringify(items));

  return item;
};

const getItems = (items = JSON.parse(localStorage.getItem("products"))) => {
  if (!items) return [];

  return Object.keys(items).reduce((acc, id) => {
    acc.push({
      id,
      name: items[id].name,
      amount: items[id].amount,
      currSymbol: items[id].currSymbol,
      quantity: items[id].quantity,
      imgUrl: items[id].imgUrl,
    });
    return acc;
  }, []);
};

const updateQuantity = (item) => {
  let items = JSON.parse(localStorage.getItem("products"));
  if (!items) return {};

  items[item.id]["quantity"] = item.quantity;
  localStorage.setItem("products", JSON.stringify(items));
  return item;
};

const deleteItem = (item) => {
  let items = JSON.parse(localStorage.getItem("products"));
  if (!items) return {};

  delete items[item.id];
  localStorage.setItem("products", JSON.stringify(items));
  return item;
};

const removeAllItems = () => {
  localStorage.removeItem("products");
  return [];
};

const getMockData = ({ method, url, body }) => {
  switch (`${method} ${url}`) {
    case `GET /cart`:
      return {
        data: getItems(),
        error: null,
        meta: {},
      };
    case `POST /cart`:
      return {
        data: saveItem(body),
        error: null,
        meta: {},
      };
    case `PUT /cart/${body.id}`:
      return {
        data: updateQuantity(body),
        error: null,
        meta: {},
      };
    case `DELETE /cart/${body.id}`: {
      return {
        data: deleteItem(body),
        error: null,
        meta: {},
      };
    }
    case `DELETE /cart/all`:
      return {
        data: removeAllItems(),
        error: null,
        meta: {},
      };
    default:
      return {
        data: {},
        error: "No matching api",
        meta: {},
      };
  }
};

// TODO - Change url to /cart/item
export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: (args, api, extraOptions) => {
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
    }),
    addItem: builder.mutation({
      query: (data) => ({
        url: "/cart",
        method: "POST",
        body: data,
      }),
    }),
    updateQuantity: builder.mutation({
      query: (data) => ({
        url: `/cart/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
    removeItem: builder.mutation({
      query: (data) => ({
        url: `/cart/${data.id}`,
        method: "DELETE",
        body: data,
      }),
    }),
    removeAllItems: builder.mutation({
      query: () => ({
        url: "/cart/all",
        method: "DELETE",
      }),
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
