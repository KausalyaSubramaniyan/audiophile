import { css } from "@emotion/react";
import BestGear from "./BestGear";
import Footer from "./Footer";
import Spacer from "./core/Spacer";
import NavBar from "./NavBar";

export default function Layout({ heroSection = <></>, content, navStyles }) {
  return (
    <>
      <NavBar customStyles={navStyles} />
      <main>
        {heroSection}
        <div css={styles.layout}>
          {content}
          <Spacer value="10rem" />
          <BestGear />
        </div>
        <Spacer value="13rem" />
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
