import { useEffect, useState } from "react";
import Card from "./Card";
import response from "../data/products.json";
import { css } from "@emotion/react";

export default function ProductCards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(response);
  }, []);

  const getCards = () => {
    return products.map((product) => (
      <Card imgUrl={product.imgUrl} productName={product.name} />
    ));
  };

  return <div css={productCardsStyles.container}>{getCards()}</div>;
}

const productCardsStyles = {
  container: css({
    margin: "12rem 0rem 9rem 0rem",
    display: "flex",
    justifyContent: "space-between",
  }),
};
