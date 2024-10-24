import { css } from "@emotion/react";
import { radius } from "../styles/CommonStyles";

export default function Input({
  id,
  placeholder,
  label,
  value,
  error,
  fullWidth,
}) {
  return (
    <div css={fullWidth ? styles.stretchContainer : styles.fixedContainer}>
      {error && <p>{error}</p>}
      <label htmlFor={id} css={styles.label}>
        {label}
      </label>
      <br />
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        css={styles.input}
      />
    </div>
  );
}

// TODO - Make it generic
const styles = {
  fixedContainer: css({
    width: "20.5rem",
  }),
  stretchContainer: css({
    width: "100%",
  }),
  input: css({
    height: "3.5rem",
    width: "100%",
    padding: "0rem 1rem",
    borderRadius: "var(--radius-md)",
    border: "1px solid #CFCFCF",
    boxSizing: "border-box",
    "&::placeholder": {
      fontWeight: "700",
      fontSize: "14px",
      opacity: "60%",
    },
  }),
  label: css({
    fontWeight: "700",
    fontSize: "12.5px",
  }),
};
