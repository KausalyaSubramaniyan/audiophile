import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Card from "./Card";
import response from "../data/mock/products.json";
import { mediaQuery } from "../styles/CommonStyles";

export default function ProductCards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(response);
  }, []);

  const getCards = () => {
    return products.map((product) => (
      <Card
        key={product.id}
        imgUrl={product.imgUrl}
        productName={product.name}
      />
    ));
  };

  return <div css={styles.container}>{getCards()}</div>;
}

const styles = {
  container: css({
    display: "flex",
    justifyContent: "space-between",
    columnGap: "2rem",
    [mediaQuery["sm"]]: {
      display: "flex",
      flexWrap: "wrap",
      rowGap: "var(--spacing-1)"
    },
  }),
};
