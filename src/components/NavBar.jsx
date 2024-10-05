import { css } from "@emotion/react";
import { colors, spacing, subTitle } from "../styles/CommonStyles";

import Logo from "../assets/images/shared/desktop/logo.svg";
import Cart from "../assets/images/shared/desktop/icon-cart.svg";

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
    background: colors.black,
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
    },
  ]),
};
