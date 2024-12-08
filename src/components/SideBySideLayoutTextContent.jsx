import { css } from "@emotion/react";
import { mediaQuery, overline } from "../styles/CommonStyles";

export default function SideBySideLayoutTextContent({
  tag,
  description,
  title,
  children,
}) {
  return (
    <div css={styles.container}>
      <p css={styles.tag}>{tag}</p>
      {title}
      <p css={styles.description}>{description}</p>
      {children}
    </div>
  );
}

const styles = {
  container: css({
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    [mediaQuery["md"]]: {
      alignItems: "center",
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
