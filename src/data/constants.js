// This file will be removed after integrating with backend

import headphones from "./heaphones.json";
import speakers from "./speakers.json";
import earphones from "./earphones.json";

import markII from "./headphones/mark-II.json";
import markI from "./headphones/mark-I.json";
import xx59 from "./headphones/xx59.json";
import zx9 from "./speakers/zx9.json";
import zx7 from "./speakers/zx7.json";
import yx1 from "./earphones/yx1.json";

import paymentsResponse from "./payments.json";

export const productData = (product) => {
  switch (product) {
    case "HEADPHONES":
      return headphones;
    case "SPEAKERS":
      return speakers;
    case "EARPHONES":
      return earphones;
  }
};

export const productDetailsData = (productId) => {
  switch (productId) {
    case 4:
      return markII;
    case 5:
      return markI;
    case 6:
      return xx59;
    case 7:
      return zx9;
    case 8:
      return zx7;
    case 9:
      return yx1;
  }
};

export const paymentsData = () => {
  return paymentsResponse;
};
