import { css } from "@emotion/react";
import { mediaQuery } from "../styles/CommonStyles";
import Picture from "./Picture";

export default function SideBySideLayout({
  isImgLeft,
  content,
  imgUrls,
}) {
  const getImg = () => {
    return (
      <Picture
        containerCss={styles.imgContainer}
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
      <div css={[styles.container, styles.leftImgContainer]}>
        <div css={styles.imgContainer}>{getImg()}</div>
        <div css={styles.contentContainer}>{content}</div>
      </div>
    );
  }
  return (
    <div css={[styles.container, styles.rightImgContainer]}>
      <div css={styles.contentContainer}>{content}</div>
      <div css={styles.imgContainer}>{getImg()}</div>
    </div>
  );
}

const styles = {
  container: css({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    height: "100%",
  }),
  leftImgContainer: css({
    [mediaQuery["lg"]]: {
      flexWrap: "wrap",
      rowGap: "var(--spacing-1)",
    },
  }),
  rightImgContainer: css({
    [mediaQuery["lg"]]: {
      flexWrap: "wrap-reverse",
      rowGap: "var(--spacing-1)",
    },
  }),
  imgContainer: css({
    width: "50%",
    height: "100%",
    [mediaQuery["md"]]: {
      width: "100%",
      height: "50%",
    },
  }),
  img: css({
    width: "100%",
    borderRadius: "var(--radius-md)",
    height: "100%",
  }),
  contentContainer: css({
    width: "40%",
    [mediaQuery["md"]]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  }),
};
