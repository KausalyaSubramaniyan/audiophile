import { createApi } from "@reduxjs/toolkit/query/react";

const getTotalObj = (total = 0, vat = 0, shipping = 0, grandTotal = 0) => {
  return {
    total,
    vat,
    shipping,
    grandTotal,
  };
};

const getCartObj = (items = []) => {
  return {
    bill: getTotalSummary(items),
    items,
  };
};

const getTotalSummary = (items) => {
  if (items.length === 0) {
    return getTotalObj();
  }

  const amt = Object.keys(items).reduce((total, id) => {
    return items[id]["amount"] * items[id]["quantity"] + total;
  }, 0);
  const shipping = 50;

  return getTotalObj(
    Number(amt.toFixed(2)),
    Number((amt * 0.2).toFixed(2)),
    shipping,
    amt + shipping
  );
};

const saveItem = (item) => {
  let items = JSON.parse(localStorage.getItem("cart"))?.items;
  items = items ?? {};

  items[item.id] = {
    name: item.name,
    amount: item.amount,
    currSymbol: item.currSymbol,
    quantity: item.quantity,
    imgUrl: item.imgUrl,
  };

  localStorage.setItem("cart", JSON.stringify(getCartObj(items)));
  return item;
};

const getCart = (cart = JSON.parse(localStorage.getItem("cart"))) => {
  if (!cart) return getCartObj([]);

  const items = cart["items"];

  return getCartObj(
    Object.keys(items).reduce((acc, id) => {
      acc.push({
        id,
        name: items[id].name,
        amount: items[id].amount,
        currSymbol: items[id].currSymbol,
        quantity: items[id].quantity,
        imgUrl: items[id].imgUrl,
      });
      return acc;
    }, [])
  );
};

const updateQuantity = (item) => {
  let items = JSON.parse(localStorage.getItem("cart"))?.items;
  if (!items) return {};

  items[item.id]["quantity"] = item.quantity;
  localStorage.setItem("cart", JSON.stringify(getCartObj(items)));
  return item;
};

const deleteItem = (item) => {
  let items = JSON.parse(localStorage.getItem("cart"))?.items;
  if (!items) return {};

  delete items[item.id];
  localStorage.setItem("products", JSON.stringify(getCartObj(items)));
  return item;
};

const removeAllItems = () => {
  localStorage.removeItem("cart");
  return [];
};

const getMockData = ({ method, url, body }) => {
  switch (`${method} ${url}`) {
    case `GET /cart`:
      return {
        data: getCart(),
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
    getCart: builder.query({
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
  useGetCartQuery,
  useAddItemMutation,
  useUpdateQuantityMutation,
  useRemoveItemMutation,
  useRemoveAllItemsMutation,
} = cartApi;
