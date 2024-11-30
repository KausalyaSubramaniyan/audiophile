import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Card from "./Card";
import Spinner from "./Spinner";
import { centerAlign, mediaQuery } from "../styles/CommonStyles";
import { useGetAllProductsQuery } from "../data/services/ProductApi";

export default function ProductCards() {
  const { isLoading, data: products } = useGetAllProductsQuery();

  const getCards = () => {
    if (isLoading) {
      return (
        <div css={centerAlign}>
          <Spinner />
        </div>
      );
    }
    return products.map((product) => (
      <Card key={product.id} imgUrl={product.imgUrl} category={product.name} />
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
      rowGap: "var(--spacing-1)",
    },
  }),
};
