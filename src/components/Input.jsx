import { css } from "@emotion/react";
import { inputStyles } from "../styles/CommonStyles";

export default function Input({ id, onChange, ...props }) {
  return (
    <div css={props.css ?? css({})}>
      <div css={styles.info}>
        <label
          htmlFor={id}
          css={
            props.error
              ? [inputStyles.label, styles.errorHighlight]
              : inputStyles.label
          }
        >
          {props.label}
        </label>
        {props.error && <p css={styles.errorText}>{props.error}</p>}
      </div>
      <br />
      <input
        id={id}
        placeholder={props.placeholder}
        value={props.value}
        css={props.error ? [styles.input, styles.errorBorder] : styles.input}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export const styles = {
  input: css([
    inputStyles.input,
    {
      padding: "0rem 1rem",
      "&::placeholder": {
        fontWeight: "700",
        fontSize: "14px",
        opacity: "60%",
      },
    },
  ]),
  info: css({
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  }),
  errorHighlight: css({
    color: "var(--color-error)",
  }),
  errorText: css({
    color: "var(--color-error)",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    margin: "0",
  }),
  errorBorder: css({
    borderColor: "var(--color-error)",
    "&:focus": {
      outlineColor: "var(--color-error)",
    },
  }),
};
