import { css } from "@emotion/react";
import { line } from "../styles/CommonStyles";

export default function Divider({ customCss }) {
  return (
    <div css={[styles.lineContainer, customCss]}>
      <div css={line}></div>
    </div>
  );
}

const styles = {
  lineContainer: css({
    backgroundColor: "transparent",
  }),
};
