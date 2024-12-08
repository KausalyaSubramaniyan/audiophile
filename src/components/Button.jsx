import { css } from "@emotion/react";

// TODO - Recheck
export default function Button({
  variant = "contained",
  color = "primary",
  size = "medium",
  onClick,
  children,
  ...props
}) {
  const colorProp = color.startsWith("--color-")
    ? `var(${color})`
    : `var(--color-${color})`;

  const getStyles = () => {
    let styles = {
      border: "none",
      "&:hover": {
        cursor: "pointer",
      },
      color: "var(--color-white-1000)",
      padding: "1rem 0rem",
      whiteSpace: "nowrap",
    };

    switch (size) {
      case "small":
        styles = { ...styles, padding: "0.5rem 1rem" };
        break;
      case "medium":
        styles = { ...styles, padding: "0.8rem 2.2rem" };
        break;
      case "large":
        styles = { ...styles, padding: "1.5rem 2rem" };
        break;
      case "stretch":
        styles = { ...styles, width: "100%" };
        break;
    }

    switch (variant) {
      case "contained":
        styles = {
          ...styles,
          backgroundColor: colorProp,
          "&:hover": {
            ...styles["&:hover"],
            backgroundColor: `var(--color-${color}-hover)`,
          },
        };
        break;
      case "outlined":
        styles = {
          ...styles,
          border: `2px solid ${colorProp}`,
          color: colorProp,
          "&:hover": {
            ...styles["&:hover"],
            backgroundColor: colorProp,
            color: "var(--color-white-1000)",
          },
        };
        break;
      case "ghost":
        styles = {
          ...styles,
          backgroundColor: "transparent",
          color: "var(--color-secondary)",
          padding: "0",
        };
      default:
        break;
    }

    return props.css ? [css(styles), props.css] : css(styles);
  };

  return (
    <button onClick={onClick} {...props} css={getStyles()}>
      {children}
    </button>
  );
}
