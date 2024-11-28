import { css } from "@emotion/react";
import { mediaQuery, radius } from "../styles/CommonStyles";

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
    gridTemplateColumns: "1.5fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridTemplateAreas: `"first third third"
                        "second third third"`,
    img: {
      borderRadius: radius.md,
      height: "100%",
      width: "100%",
    },

    [mediaQuery["sm"]]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr 1fr 1.5fr",
      gridTemplateAreas: `"first"
                        "second"
                        "third"`,
    },
  }),
  first: css({
    gridArea: "first",
  }),
  second: css({
    gridArea: "second",
  }),
  third: css({
    gridArea: "third",
  }),
};
