import { css } from "@emotion/react";
import { spacing } from "../styles/CommonStyles";

export default function Layout({ heroSection, content }) {
  const HeroSection = heroSection;
  const Content = content;
  return (
    <>
      <HeroSection />
      <div css={layoutStyles.layout}>
        <Content />
      </div>
    </>
  );
}

const layoutStyles = {
  layout: css({
    margin: `0rem ${spacing.md}`,
  }),
};
