// This file will be removed after integrating with backend

import headphones from "./heaphones.json";
import speakers from "./speakers.json";
import earphones from "./earphones.json";

import markII from "./headphones/mark-II-headphones.json";
import markI from "./headphones/mark-I-headphones.json";

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
  }
};
