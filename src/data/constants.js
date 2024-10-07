// This file will be removed after integrating with backend

import headphones from "./heaphones.json";
import speakers from "./speakers.json";
import earphones from "./earphones.json";

import markII from "./mark-II-headphones.json";

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

export const productDetailsData = (product) => {
  switch (product) {
    case "XX99 Mark II Headphones":
      return markII;
  }
};
