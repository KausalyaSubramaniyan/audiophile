import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { subTitle } from "../styles/CommonStyles";

export default function Nav({ label }) {
  return (
    <nav aria-label={label}>
      <ul css={styles.nav}>
        <li>
          <Link to={`/`} css={styles.link}>
            HOME
          </Link>
        </li>
        <li>
          <Link to={`/products/headphones`} css={styles.link}>
            HEADPHONES
          </Link>
        </li>
        <li>
          <Link to={`/products/speakers`} css={styles.link}>
            SPEAKERS
          </Link>
        </li>
        <li>
          <Link to={`/products/earphones`} css={styles.link}>
            EARPHONES
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: css({
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    padding: "0",
    width: "100%",
    listStyleType: "none",
    li: {
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
