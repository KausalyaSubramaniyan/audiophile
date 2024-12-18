import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { subTitle } from "../styles/CommonStyles";

export default function Nav() {
  return (
    <ul css={styles.nav}>
      <ol>
        <Link to={`/`} css={styles.link}>
          HOME
        </Link>
      </ol>
      <ol>
        <Link to={`/products/headphones`} css={styles.link}>
          HEADPHONES
        </Link>
      </ol>
      <ol>
        <Link to={`/products/speakers`} css={styles.link}>
          SPEAKERS
        </Link>
      </ol>
      <ol>
        <Link to={`/products/earphones`} css={styles.link}>
          EARPHONES
        </Link>
      </ol>
    </ul>
  );
}

const styles = {
  nav: css({
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    padding: "0",
    width: "100%",
    ol: {
      padding: "0",
    },
  }),
  link: css([
    subTitle,
    {
      opacity: "100%",
      color: "var(--color-white-1000)",
      textDecoration: "none",
      "&:hover": {
        color: "var(--color-primary)",
      },
    },
  ]),
};
