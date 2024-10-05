import { css } from "@emotion/react";
import NavBar from "./NavBar";
import { colors, spacing } from "../styles/CommonStyles";

export default function Layout({ heroSection, content }) {
  const HeroSection = heroSection;
  const Content = content;
  return (
    <>
      <NavBar />
      {HeroSection && (
        <div css={layoutStyles.lineContainer}>
          <hr css={layoutStyles.line}></hr>
        </div>
      )}
      {HeroSection && <HeroSection />}
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
  line: {
    margin: `0rem ${spacing.md}`,
    opacity: "25%",
  },
  lineContainer: {
    background: colors.black,
  },
};
