import { css } from "@emotion/react";
import { overline, subTitle, buttonStyles } from "../styles/CommonStyles";

export default function SideBySideLayoutTextContent({
  tag,
  description,
  title,
  suffix,
}) {
  return (
    <div css={styles.container}>
      <p css={overline}>{tag}</p>
      {title}
      <p css={subTitle}>{description}</p>
      {suffix}
    </div>
  );
}

const styles = {
  container: css({
    width: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }),
};
