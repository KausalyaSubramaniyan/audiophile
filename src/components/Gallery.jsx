import { css } from "@emotion/react";
import { radius } from "../styles/CommonStyles";

export default function Gallery({ imgs }) {
  return (
    <div css={galleryStyles.container}>
      <img css={galleryStyles.first} src={imgs[0].imgUrl} />
      <img css={galleryStyles.second} src={imgs[1].imgUrl} />
      <img css={galleryStyles.third} src={imgs[2].imgUrl} />
    </div>
  );
}

const galleryStyles = {
  container: css({
    display: "grid",
    gap: "2rem 2rem",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridTemplateAreas: `"first third"
                        "second third"`,
  }),
  first: css({
    gridArea: "first",
    borderRadius: radius.md,
  }),
  second: css({
    gridArea: "second",
    borderRadius: radius.md,
  }),
  third: css({
    gridArea: "third",
    borderRadius: radius.md,
  }),
};
