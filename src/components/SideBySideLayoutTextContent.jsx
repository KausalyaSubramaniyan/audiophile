import { css } from "@emotion/react";
import { mediaQuery, overline } from "../styles/CommonStyles";

export default function SideBySideLayoutTextContent({
  tag,
  description,
  title,
  children,
  isVerticalTab = false,
}) {
  const containerCss = isVerticalTab
    ? styles.verticalTabContainer
    : styles.defaultContainer;
  return (
    <div css={containerCss}>
      <p css={styles.tag}>{tag}</p>
      {title}
      <p css={styles.description}>{description}</p>
      {children}
    </div>
  );
}

const containerStyles = {
  width: "90%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
};

const styles = {
  defaultContainer: css({
    ...containerStyles,
    [mediaQuery["md"]]: {
      alignItems: "center",
      justifyContent: "flex-start",
    },
  }),
  verticalTabContainer: css({
    ...containerStyles,
    [mediaQuery["md"]]: {
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
  }),
  description: css({
    opacity: "55%",
  }),
  tag: css([
    overline,
    {
      color: "var(--color-primary)",
      marginTop: "0",
    },
  ]),
};
