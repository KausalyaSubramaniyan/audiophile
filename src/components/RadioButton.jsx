import { css } from "@emotion/react";

export default function RadioButton({ name, options }) {
  return (
    <div css={styles.container}>
      {options &&
        options.map((option) => (
          <label key={option.value} css={styles.input}>
            <input
              id={option.value}
              type="radio"
              name={name}
              value={option.value}
              css={styles.radio}
            />
            {option.label}
          </label>
        ))}
    </div>
  );
}

// TODO - Move code to input component
const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    width: "20.5rem",
    rowGap: "var(--spacing-1)",
  }),
  input: css({
    border: "1px solid #CFCFCF",
    padding: "0.9rem 0.8rem",
    width: "100%",
    boxSizing: "border-box",
    borderRadius: "var(--radius-md)",
    display: "flex",
    alignItems: "center",
    columnGap: "var(--spacing-1)",
  }),
  radio: css({
    height: "1.2rem",
    width: "1.2rem",
    padding: "0",
    margin: "0",
  }),
};
