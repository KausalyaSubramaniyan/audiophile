import { css } from "@emotion/react";
import { colors, spacing, subTitle } from "../styles/CommonStyles";

import Logo from "../../public/images/shared/desktop/logo.svg";
import Cart from "../../public/images/shared/desktop/icon-cart.svg";

export default function NavBar() {
  return (
    <div css={navBarStyles.container}>
      <Logo />
      <ul css={navBarStyles.nav}>
        <ol>HOME</ol>
        <ol>HEADPHONES</ol>
        <ol>SPEAKERS</ol>
        <ol>EARPHONES</ol>
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
    zIndex: "2"
  }),
  nav: css([
    subTitle,
    {
      display: "flex",
      justifyContent: "space-between",
    },
  ]),
};
