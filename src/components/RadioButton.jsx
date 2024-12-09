import { css } from "@emotion/react";
import { inputStyles } from "../styles/CommonStyles";

export default function RadioButton({
  name,
  options,
  checked,
  onChange,
  ...props
}) {
  return (
    <div css={styles.container}>
      {options &&
        options.map((option) => (
          <label key={option.value} css={styles.input}>
            <input
              id={option.value}
              value={option.value}
              type="radio"
              name={name}
              checked={checked === option.value}
              css={styles.radio}
              onChange={onChange}
              {...props}
            />
            {option.label}
          </label>
        ))}
    </div>
  );
}

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    width: "19rem",
    rowGap: "var(--spacing-1)",
  }),
  input: css([
    inputStyles.input,
    {
      padding: "0.9rem 0.8rem",
      display: "flex",
      alignItems: "center",
      columnGap: "var(--spacing-1)",
    },
  ]),
  radio: css({
    height: "1.2rem",
    width: "1.2rem",
    padding: "0",
    margin: "0",
  }),
};
