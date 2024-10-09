import { css } from "@emotion/react";
import { buttonStyles, colors } from "../styles/CommonStyles";

function RecommendationCard({ product }) {
  return (
    <div css={recommendationsStyles.card}>
      <img
        alt={product.title}
        src={product.imgUrl}
        css={recommendationsStyles.img}
      />
      <h5>{product.title}</h5>
      <button css={buttonStyles(colors.white, colors.orange)}>
        SEE PRODUCT
      </button>
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
      <h3 css={recommendationsStyles.title}>YOU MAY ALSO LIKE</h3>
      <div css={recommendationsStyles.cardContainer}>{getCards()}</div>
    </>
  );
}

const recommendationsStyles = {
  title: css({
    margin: "4rem 0rem",
    textAlign: "center",
  }),
  cardContainer: css({
    display: "flex",
    justifyContent: "space-between",
  }),
  card: css({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  }),
  img: css({
    height: "17.5rem",
    width: "18rem",
    backgroundColor: colors.grey,
  }),
};
