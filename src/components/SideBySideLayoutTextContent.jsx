import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { overline, subTitle, buttonStyles } from "../styles/CommonStyles";

export default function SideBySideLayoutTextContent({
  product,
  title,
  buttonInfo,
}) {
  const navigate = useNavigate();
  return (
    <div css={styles.container}>
      <p css={overline}>{product.tag}</p>
      {title}
      <p css={subTitle}>{product.description}</p>
      {buttonInfo && Object.keys(buttonInfo).length > 0 && (
        <button
          css={buttonStyles(buttonInfo.color, buttonInfo.bgColor)}
          onClick={() => {
            navigate(buttonInfo.productUrl, { state: { product } });
          }}
        >
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
