import { css } from "@emotion/react";
import { colors, subTitle } from "../styles/CommonStyles";

export default function Card({ imgUrl, productName }) {
  return (
    <div css={cardStyles.container}>
      <div css={cardStyles.text}>
        <h6>{productName}</h6>
        <p css={subTitle}>SHOP</p>
      </div>
      <img alt="product" src={imgUrl} css={cardStyles.img}></img>
    </div>
  );
}

const cardStyles = {
  container: css({
    position: "relative",
    display: "flex",
    background: colors.grey,
    height: "13.5rem",
    width: "18.5rem",
    borderRadius: "9px",
  }),
  text: css({
    textAlign: "center",
    marginTop: "35%",
    width: "100%",
  }),
  img: css({
    position: "absolute",
    top: "-80px",
    left: "calc(18.5rem/2 - 115px)",
    height: "220px",
    width: "230px",
  }),
};
