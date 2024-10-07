import { css } from "@emotion/react";
import { overline, subTitle, buttonStyles } from "../styles/CommonStyles";

export default function SideBySideLayoutTextContent({
  tag,
  title,
  description,
  buttonInfo,
}) {
  return (
    <div css={styles.container}>
      <p css={overline}>{tag}</p>
      {title}
      <p css={subTitle}>{description}</p>
      {buttonInfo && Object.keys(buttonInfo).length > 0 && (
        <button css={buttonStyles(buttonInfo.color, buttonInfo.bgColor)}>
          {buttonInfo.text}
        </button>
      )}
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
