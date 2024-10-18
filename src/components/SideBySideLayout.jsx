import { css } from "@emotion/react";
import { mediaQuery } from "../styles/CommonStyles";

export default function SideBySideLayout({
  isImgLeft,
  content,
  imgurls,
  imgDimension,
}) {
  const getImg = () => {
    return (
      <picture css={styles.imgContainer}>
        <source
          srcSet={imgurls[0]}
          media="(max-width: 576px)"
          css={styles.img}
        />
        <source
          srcSet={imgurls[1]}
          media="(max-width: 767px)"
          css={styles.img}
        />
        <img srcSet={imgurls[2]} css={styles.img} />
      </picture>
    );
  };

  if (isImgLeft) {
    return (
      <div css={styles.container}>
        <div css={styles.imgContainer}>{getImg()}</div>
        <div css={styles.contentContainer}>{content}</div>
      </div>
    );
  }
  return (
    <div css={styles.container}>
      <div css={styles.contentContainer}>{content}</div>
      <div css={styles.imgContainer}>{getImg()}</div>
    </div>
  );
}

const styles = {
  container: css({
    display: "flex",
    width: "100%",
    columnGap: "var(--spacing-2)",
    height: "100%",
    [mediaQuery[1]]: {
      flexWrap: "wrap-reverse",
      rowGap: "var(--spacing-2)",
    },
    [mediaQuery[0]]: {
      flexWrap: "wrap-reverse",
      rowGap: "var(--spacing-2)",
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
    width: "50%",
    [mediaQuery[1]]: {
      width: "100%",
      height: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    [mediaQuery[0]]: {
      width: "100%",
      height: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  }),
};
