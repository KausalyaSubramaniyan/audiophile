import { css } from "@emotion/react";
import Button from "./Button";
import { colors, mediaQuery } from "../styles/CommonStyles";

function RecommendationCard({ product }) {
  return (
    <div css={styles.card}>
      <picture css={styles.imgContainer}>
        <source
          srcSet={product.imgUrls["mobile"]}
          media="(max-width: 576px)"
          css={styles.img}
        />
        <source
          srcSet={product.imgUrls["tablet"]}
          media="(max-width: 768px)"
          css={styles.img}
        />
        <img srcSet={product.imgUrls["desktop"]} css={styles.img} />
      </picture>
      <h5>{product.title}</h5>
      <Button>SEE PRODUCT</Button>
    </div>
  );
}

export default function Recommendations({ products }) {
  const getCards = () => {
    return products.map((product) => (
      <RecommendationCard key={product.id} product={product} />
    ));
  };

  return (
    <>
      <h3 css={styles.title}>YOU MAY ALSO LIKE</h3>
      <div css={styles.cardContainer}>{getCards()}</div>
    </>
  );
}

const styles = {
  title: css({
    margin: "4rem 0rem",
    textAlign: "center",
  }),
  imgContainer: css({
    height: "20.5rem",
    width: "100%",
    [mediaQuery[0]]: {
      height: "10.5rem",
    },
  }),
  cardContainer: css({
    display: "flex",
    justifyContent: "space-between",
    columnGap: "2rem",
    [mediaQuery[0]]: {
      display: "flex",
      flexWrap: "wrap",
      rowGap: "5rem",
    },
  }),
  card: css({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  }),
  img: css({
    height: "100%",
    width: "100%",
  }),
};
