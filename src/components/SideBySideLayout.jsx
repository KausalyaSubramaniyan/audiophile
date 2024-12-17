import { css } from "@emotion/react";
import { mediaQuery } from "../styles/CommonStyles";
import Picture from "./Picture";

export default function SideBySideLayout({
  isImgLeft,
  content,
  imgUrls,
  isVerticalTab = false,
}) {
  let imgContainerCss = "";
  let leftImgContainerCss = "";
  let rightImgContainerCss = "";
  let contentContainerCss = "";

  if (isVerticalTab) {
    imgContainerCss = styles.verticalTabImgContainer;
    leftImgContainerCss = styles.verticalTabLeftImgContainer;
    rightImgContainerCss = styles.verticalTabRightImgContainer;
    contentContainerCss = styles.verticalTabContentContainer;
  } else {
    imgContainerCss = styles.defaultImgContainer;
    leftImgContainerCss = styles.defaultLeftImgContainer;
    rightImgContainerCss = styles.defaultRightImgContainer;
    contentContainerCss = styles.defaultContentContainer;
  }

  const getImg = () => {
    return (
      <Picture
        containerCss={imgContainerCss}
        imgCss={styles.img}
        imgUrls={{
          mobile: imgUrls["mobile"],
          tablet: imgUrls["tablet"],
          desktop: imgUrls["desktop"],
        }}
      />
    );
  };

  if (isImgLeft) {
    return (
      <div css={[styles.container, leftImgContainerCss]}>
        {getImg()}
        <div css={contentContainerCss}>{content}</div>
      </div>
    );
  }
  return (
    <div css={[styles.container, rightImgContainerCss]}>
      <div css={contentContainerCss}>{content}</div>
      {getImg()}
    </div>
  );
}

const leftImgContainerStyles = {
  flexWrap: "wrap",
  rowGap: "var(--spacing-1)",
};

const rightImgContainerStyles = {
  flexWrap: "wrap-reverse",
  rowGap: "var(--spacing-1)",
};

const styles = {
  container: css({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    height: "100%",
  }),
  img: css({
    width: "100%",
    borderRadius: "var(--radius-md)",
    height: "100%",
  }),
  defaultLeftImgContainer: css({
    [mediaQuery["lg"]]: leftImgContainerStyles,
  }),
  verticalTabLeftImgContainer: css({
    [mediaQuery["sm"]]: leftImgContainerStyles,
  }),
  defaultRightImgContainer: css({
    [mediaQuery["lg"]]: rightImgContainerStyles,
  }),
  verticalTabRightImgContainer: css({
    [mediaQuery["sm"]]: rightImgContainerStyles,
  }),
  defaultImgContainer: css({
    width: "50%",
    height: "100%",
    [mediaQuery["md"]]: {
      width: "100%",
      height: "50%",
    },
  }),
  verticalTabImgContainer: css({
    width: "50%",
    [mediaQuery["sm"]]: {
      width: "100%",
      height: "50%",
    },
  }),
  defaultContentContainer: css({
    width: "40%",
    [mediaQuery["md"]]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      height: "40%",
    },
  }),
  verticalTabContentContainer: css({
    width: "40%",
    fontSize: "13px",
    [mediaQuery["sm"]]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "40%",
    },
  }),
};
