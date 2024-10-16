import { css } from "@emotion/react";
import { colors, radius, subTitle, mediaQuery } from "../styles/CommonStyles";

export default function Card({ imgUrl, productName }) {
  return (
    <div css={cardStyles.container}>
      <img alt="product" src={imgUrl} css={cardStyles.img}></img>
      <div css={cardStyles.text}>
        <h6>{productName}</h6>
        <p css={subTitle}>SHOP</p>
      </div>
    </div>
  );
}

const cardStyles = {
  container: css({
    height: "20.5rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    background:
      "linear-gradient(to bottom, var(--color-white-1000) 35%, var(--color-grey-200) 35%)",
    borderRadius: "var(--radius-md)",
    [mediaQuery[2]]: {
      height: "18.5rem",
    },
    [mediaQuery[1]]: {
      height: "18.5rem",
    },
    [mediaQuery[0]]: {
      height: "18.5rem",
    },
  }),
  text: css({
    height: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }),
  img: css({
    position: "relative",
    width: "210px",
    height: "210px",
    top: "10%",
    left: "calc(50% - 105px)",
    [mediaQuery[2]]: {
      height: "170px",
      width: "170px",
      left: "calc(50% - 85px)",
    },
    [mediaQuery[1]]: {
      height: "170px",
      width: "170px",
      left: "calc(50% - 85px)",
    },
    [mediaQuery[0]]: {
      height: "170px",
      width: "170px",
      left: "calc(50% - 85px)",
    },
  }),
};
