import { mediaQueryCondition } from "../styles/CommonStyles";

export default function Picture({ containerCss, imgCss, imgUrls }) {
  return (
    <picture css={containerCss}>
      <source
        srcSet={imgUrls["mobile"]}
        media={mediaQueryCondition["sm"]}
        css={imgCss}
      />
      <source
        srcSet={imgUrls["tablet"]}
        media={mediaQueryCondition["md"]}
        css={imgCss}
      />
      <img src={imgUrls["desktop"]} css={imgCss} />
    </picture>
  );
}
