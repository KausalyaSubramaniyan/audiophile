import { css } from "@emotion/react";
import { mediaQuery } from "../styles/CommonStyles";

export default function SideBySideLayout({
  isImgLeft,
  content,
  imgUrls,
  imgDimension,
}) {
  const getImg = () => {
    return (
      <picture css={styles.imgContainer}>
        <source
          srcSet={imgUrls["mobile"]}
          media="(max-width: 576px)"
          css={styles.img}
        />
        <source
          srcSet={imgUrls["tablet"]}
          media="(max-width: 768px)"
          css={styles.img}
        />
        <img srcSet={imgUrls["desktop"]} css={styles.img} />
      </picture>
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
    [mediaQuery[2]]: {
      flexWrap: "wrap",
      rowGap: "var(--spacing-1)",
    },
  }),
  rightImgContainer: css({
    [mediaQuery[2]]: {
      flexWrap: "wrap-reverse",
      rowGap: "var(--spacing-1)",
    },
  }),
  imgContainer: css({
    width: "50%",
    height: "100%",
    [mediaQuery[1]]: {
      width: "100%",
      height: "50%",
    },
    [mediaQuery[0]]: {
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
    [mediaQuery[1]]: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  }),
};
