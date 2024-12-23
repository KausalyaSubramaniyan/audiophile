import { css } from "@emotion/react";
import BestGear from "./BestGear";
import Footer from "./Footer";
import Spacer from "./core/Spacer";
import NavBar from "./NavBar";

export default function Layout({
  content,
  navStyles,
  customCss,
  heroSection = <></>,
  isCheckoutPage = false,
}) {
  return (
    <>
      <NavBar customStyles={navStyles} />
      <main>
        {heroSection}
        <div css={customCss ?? styles.layout}>
          {content}
          {!isCheckoutPage && <Spacer value="10rem" />}
          {!isCheckoutPage && <BestGear />}
        </div>
        {!isCheckoutPage && <Spacer value="13rem" />}
      </main>
      <Footer />
    </>
  );
}

const styles = {
  layout: css({
    margin: "0rem var(--side-spacing)",
  }),
};
