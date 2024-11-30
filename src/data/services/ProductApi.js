import { createApi } from "@reduxjs/toolkit/query/react";

import products from "../mock/products.json";

import headphones from "../mock/headphones/heaphones.json";
import speakers from "../mock/speakers/speakers.json";
import earphones from "../mock/earphones/earphones.json";

import markII from "../mock/headphones/mark-II.json";
import markI from "../mock/headphones/mark-I.json";
import xx59 from "../mock/headphones/xx59.json";
import zx9 from "../mock/speakers/zx9.json";
import zx7 from "../mock/speakers/zx7.json";
import yx1 from "../mock/earphones/yx1.json";

const createResponse = (data, error = null, meta = {}) => {
  return {
    data,
    error,
    meta,
  };
};

const getMockData = ({ method, url }) => {
  console.log("getMockData", method, url);
  switch (`${method} ${url}`) {
    case `GET /products`:
      return createResponse(products);

    case `GET /products/headphones`:
      return createResponse(headphones);
    case `GET /products/speakers`:
      return createResponse(speakers);
    case `GET /products/earphones`:
      return createResponse(earphones);

    case `GET /products/headphones/4`:
      return createResponse(markII);
    case `GET /products/headphones/5`:
      return createResponse(markI);
    case `GET /products/headphones/6`:
      return createResponse(xx59);

    case `GET /products/speakers/7`:
      return createResponse(zx9);
    case `GET /products/speakers/8`:
      return createResponse(zx7);

    case `GET /products/earphones/9`:
      return createResponse(yx1);

    default:
      return createResponse({}, "No matching api");
  }
};

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: (args, api, extraOptions) => {
    console.log("Base query of productApi", args, api, extraOptions);
    // TODO - Check this logic
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(getMockData(args));
      }, 1000)
    );
  },
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
    }),
    getProductsByCategory: builder.query({
      query: (category) => ({
        url: `/products/${category}`,
        method: "GET",
      }),
    }),
    getProductById: builder.query({
      query: (arg) => ({
        url: `/products/${arg.category}/${arg.id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
} = productApi;
