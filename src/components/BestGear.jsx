import { css } from "@emotion/react";
import { mediaQuery } from "../styles/CommonStyles";
import SideBySideLayout from "./SideBySideLayout";
import SideBySideLayoutTextContent from "./SideBySideLayoutTextContent";

export default function BestGear() {
  return (
    <div css={styles.layoutContainer}>
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
        imgUrls={{
          mobile: "/images/shared/mobile/image-best-gear.jpg",
          tablet: "/images/shared/tablet/image-best-gear.jpg",
          desktop: "/images/shared/desktop/image-best-gear.jpg",
        }}
      />
    </div>
  );
}

const styles = {
  layoutContainer: css({
    height: "38rem",
    [mediaQuery["sm"]]: {
      height: "50rem",
    },
  }),
  textHighlight: css({
    color: "var(--color-primary)",
    font: "inherit",
  }),
};
