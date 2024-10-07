import { css } from "@emotion/react";

export default function SideBySideLayout({
  isImgLeft,
  content,
  imgurl,
  imgDimension,
}) {
  const imgStyles = css({
    height: imgDimension.height,
    width: imgDimension.width,
  });
  if (isImgLeft) {
    return (
      <div css={styles.container}>
        <img src={imgurl} css={imgStyles} />
        {content}
      </div>
    );
  }
  return (
    <div css={styles.container}>
      {content}
      <img src={imgurl} css={imgStyles} />
    </div>
  );
}

// TODO - revisit and check - is crt?
const styles = {
  container: css({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "10rem 0rem",
  }),
};
