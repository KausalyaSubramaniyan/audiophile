import { css } from "@emotion/react";
import { spacing, colors } from "../styles/CommonStyles";
import Footer from "./Footer";
import SideBySideLayout from "./SideBySideLayout";
import SideBySideLayoutTextContent from "./SideBySideLayoutTextContent";
import Spacer from "./Spacer";

export default function Layout({ heroSection, content }) {
  return (
    <>
      {heroSection}
      <div css={styles.layout}>
        {content}
        <Spacer value={spacing.sm} />
        <SideBySideLayout
          isImgLeft={false}
          content={
            <SideBySideLayoutTextContent
              tag=""
              description="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
              title={
                <h2>
                  BRINGING YOU THE
                  <span css={styles.textHighlight}> BEST</span> AUDIO GEAR
                </h2>
              }
            />
          }
          imgurl="/images/shared/desktop/image-best-gear.jpg"
          imgDimension={{ height: "560px", width: "48%" }}
        />
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
  textHighlight: css({
    color: colors.orange,
    font: "inherit",
  }),
};
