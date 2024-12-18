import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import Button from "./core/Button";
import { mediaQuery } from "../styles/CommonStyles";
import Picture from "./core/Picture";

function RecommendationCard({ product }) {
  const navigate = useNavigate();
  return (
    <div css={styles.card}>
      <Picture
        containerCss={styles.imgContainer}
        imgCss={styles.img}
        imgUrls={{
          mobile: product.imgUrls["mobile"],
          tablet: product.imgUrls["tablet"],
          desktop: product.imgUrls["desktop"],
        }}
      />
      <h5>{product.title}</h5>
      <Button
        css={styles.button}
        onClick={() => navigate(`/products/${product.category}/${product.id}`)}
      >
        SEE PRODUCT
      </Button>
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
    [mediaQuery["lg"]]: {
      height: "16.5rem",
    },
    [mediaQuery["sm"]]: {
      height: "10.5rem",
    },
  }),
  button: css({
    [mediaQuery["md"]]: {
      fontSize: "13px",
    },
  }),
  cardContainer: css({
    display: "flex",
    justifyContent: "space-between",
    columnGap: "2rem",
    [mediaQuery["md"]]: {
      columnGap: "1rem",
    },
    [mediaQuery["sm"]]: {
      display: "flex",
      flexWrap: "wrap",
      rowGap: "5rem",
    },
  }),
  card: css({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  }),
  img: css({
    height: "100%",
    width: "100%",
  }),
};
