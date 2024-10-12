import { css } from "@emotion/react";

export default function Input({ id, placeholder, label, value, error }) {
  return (
    <div>
      {error && <p>{error}</p>}
      <label htmlFor={id}>{label}</label> <br />
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        css={inputStyles.container}
      />
    </div>
  );
}

const inputStyles = {
  container: css({
    height: "56px",
    width: "275px",
    padding: "0rem 1rem",
    borderRadius: "8px",
    border: "1px solid #CFCFCF",
    "&::placeholder": {
      fontWeight: "700",
      fontSize: "14px",
      opacity: "60%",
    },
  }),
};
