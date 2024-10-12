import { css } from "@emotion/react";
import Button from "./Button";

export default function Confirmation() {
  return (
    <div css={styles.container}>
      <img alt="success" src="/images/checkout/icon-order-confirmation.svg" />
      <h3>THANK YOU FOR YOUR ORDER</h3>
      <p>You will receive an email confirmation shortly.</p>
      <Button size="stretch">BACK TO HOME</Button>
    </div>
  );
}

const styles = {
  container: css({
    height: "37rem",
    width: "36rem",
  }),
};
