import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { colors, subTitle } from "../styles/CommonStyles";

export default function Nav() {
  return (
    <ul css={styles.nav}>
      <ol>
        <Link to={`/`} css={styles.link}>
          HOME
        </Link>
      </ol>
      <ol>
        <Link to={`/headphones`} css={styles.link}>
          HEADPHONES
        </Link>
      </ol>
      <ol>
        <Link to={`/speakers`} css={styles.link}>
          SPEAKERS
        </Link>
      </ol>
      <ol>
        <Link to={`/earphones`} css={styles.link}>
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
      color: colors.white,
      textDecoration: "none",
    },
  ]),
};
