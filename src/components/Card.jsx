import { css } from "@emotion/react";
import { subTitle, mediaQuery } from "../styles/CommonStyles";
import { Link } from "react-router-dom";

export default function Card({ imgUrl, category }) {
  return (
    <div css={styles.container}>
      <img alt="product" src={imgUrl} css={styles.img}></img>
      <div css={styles.text}>
        <h6>{category.toUpperCase()}</h6>
        <Link to={`/products/${category}`} css={styles.link}>
          <span css={styles.linkText}>SHOP </span>
          <span css={styles.linkArrow}>{">"}</span>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: css({
    height: "20.5rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    background:
      "linear-gradient(to bottom, var(--color-white-1000) 35%, var(--color-grey-200) 35%)",
    borderRadius: "var(--radius-md)",
    [mediaQuery["lg"]]: {
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
    [mediaQuery["lg"]]: {
      height: "170px",
      width: "170px",
      left: "calc(50% - 85px)",
    },
  }),
  link: css([
    {
      textDecoration: "none",
      margin: "var(--spacing-0-5) 0rem",
      display: "flex",
    },
  ]),
  linkText: css([subTitle, {
    color: "var(--color-secondary)",
    "&:hover": {
      color: "var(--color-primary)",
      opacity: "100%"
    }
  }]),
  linkArrow: css({
    color: "var(--color-primary)",
    opacity: "100%",
    fontSize: "26px",
  }),
};
// TODO - Change replace 26px with var of body/span font size
