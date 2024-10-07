import { css } from "@emotion/react";
import { colors, spacing, subTitle } from "../styles/CommonStyles";

import Logo from "../../public/images/shared/desktop/logo.svg";
import Cart from "../../public/images/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div css={navBarStyles.container}>
      <Logo />
      <ul css={navBarStyles.nav}>
        <ol>
          <Link to={`/`}>HOME</Link>
        </ol>
        <ol>
          <Link to={`/headphones`}>HEADPHONES</Link>
        </ol>
        <ol>
          <Link to={`/speakers`}>SPEAKERS</Link>
        </ol>
        <ol>
          <Link to={`/earphones`}>EARPHONES</Link>
        </ol>
      </ul>
      <Cart />
    </div>
  );
}

const navBarStyles = {
  container: css({
    background: colors.lightBlack,
    color: colors.white,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `1rem ${spacing.md}`,
  }),
  nav: css([
    subTitle,
    {
      display: "flex",
      justifyContent: "space-between",
      opacity: "100%",
      zIndex: "2",
      a: {
        color: colors.white,
        textDecoration: "none",
      },
    },
  ]),
};
