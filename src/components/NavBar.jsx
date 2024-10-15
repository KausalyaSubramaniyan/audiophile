import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { colors, spacing, subTitle } from "../styles/CommonStyles";

import Logo from "../../public/images/shared/desktop/logo.svg";
import CartIcon from "../../public/images/shared/desktop/icon-cart.svg";
import Cart from "./Cart";
import Overlay from "./Overlay";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div css={navBarStyles.container}>
      <Logo />
      <ul css={navBarStyles.nav}>
        <ol>
          <Link to={`/`} css={navBarStyles.link}>
            HOME
          </Link>
        </ol>
        <ol>
          <Link to={`/headphones`} css={navBarStyles.link}>
            HEADPHONES
          </Link>
        </ol>
        <ol>
          <Link to={`/speakers`} css={navBarStyles.link}>
            SPEAKERS
          </Link>
        </ol>
        <ol>
          <Link to={`/earphones`} css={navBarStyles.link}>
            EARPHONES
          </Link>
        </ol>
      </ul>
      <button
        onClick={() => setIsVisible(!isVisible)}
        css={navBarStyles.cartButton}
      >
        <CartIcon />
      </button>
      <Overlay
        open={isVisible}
        onClick={() => setIsVisible(!isVisible)}
        placement="top-right"
      >
        <Cart />
      </Overlay>
    </div>
  );
}

const navBarStyles = {
  container: css({
    background: "#141414",
    color: colors.white,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `1.2rem ${spacing.md}`
  }),
  nav: css({
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    zIndex: "2",
    padding: "0",
    width: "40%",
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
  cartButton: css({
    background: "none",
    border: "none",
    zIndex: "2",
    "&:hover": {
      cursor: "pointer",
    },
  }),
};
