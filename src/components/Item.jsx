import { css } from "@emotion/react";
import { subTitle } from "../styles/CommonStyles";

export default function Item({ name, amount, currSymbol, imgUrl, child }) {
  return (
    <div css={itemStyles.container}>
      <div css={itemStyles.left}>
        <img src={imgUrl} />
        <div>
          <p css={itemStyles.name}>{name}</p>
          <p css={itemStyles.currency}>
            {currSymbol} {amount.toLocaleString()}
          </p>
        </div>
      </div>
      {child}
    </div>
  );
}

const itemStyles = {
  container: css({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
  }),
  left: css({
    display: "flex",
    alignItems: "center",
    img: {
      height: "64px",
      width: "64px",
      borderRadius: "var(--radius-lg)",
      marginRight: "1rem",
    },
  }),
  name: css([
    subTitle,
    {
      fontSize: "15px",
      opacity: "100%",
      margin: "0",
    },
  ]),
  currency: css([
    subTitle,
    {
      padding: "2px 0px",
      margin: "0",
    },
  ]),
};
