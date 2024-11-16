import { css } from "@emotion/react";
import { colors } from "../styles/CommonStyles";

export default function Button({
  variant = "contained",
  color = "primary",
  size = "medium",
  onClick,
  children,
  ...props
}) {
  const getStyles = () => {
    let styles = {
      border: "none",
      "&:hover": {
        cursor: "pointer",
      },
      color: colors.white,
      padding: "1rem 0rem",
      whiteSpace: "nowrap"
    };

    switch (variant) {
      case "contained":
        styles = { ...styles, backgroundColor: colors[color] };
        break;
      case "outlined":
        styles = {
          ...styles,
          border: `2px solid ${colors[color]}`,
          color: colors[color],
        };
        break;
      default:
        break;
    }

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

    return props.css ? [css(styles), props.css] : css(styles);
  };

  return (
    <button onClick={onClick} {...props} css={getStyles()}>
      {children}
    </button>
  );
}
