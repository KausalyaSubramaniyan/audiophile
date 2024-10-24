import { css } from "@emotion/react";
import { colors } from "../styles/CommonStyles";
import BestGear from "./BestGear";
import Footer from "./Footer";
import Spacer from "./Spacer";

export default function Layout({ heroSection, content }) {
  return (
    <>
      {heroSection}
      <div css={styles.layout}>
        {content}
        <Spacer value="10rem" />
        <BestGear />
      </div>
      <Spacer value="13rem" />
      <Footer />
    </>
  );
}

const styles = {
  layout: css({
    margin: "0rem var(--side-spacing)",
  }),
};
