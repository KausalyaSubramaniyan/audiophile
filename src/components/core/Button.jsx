import { css } from "@emotion/react";

const getBaseStyles = (props) => {
  return {
    base: {
      border: "none",
      color: "var(--color-white-1000)",
      padding: "1rem 0rem",
      whiteSpace: "nowrap",
    },
    hover: {
      cursor: props.disabled ? "not-allowed" : "pointer",
    },
  };
};

const getSizeStyles = (size) => {
  switch (size) {
    case "small":
      return { base: { padding: "0.5rem 1rem" } };
    case "medium":
      return { base: { padding: "0.8rem 2.2rem" } };
    case "large":
      return { base: { padding: "1.5rem 2rem" } };
    case "stretch":
      return { base: { width: "100%" } };
    default:
      return {};
  }
};

const getVariantStyles = (variant, colorProp, color) => {
  switch (variant) {
    case "contained":
      return {
        base: {
          backgroundColor: colorProp,
        },
        hover: {
          backgroundColor: `var(--color-${color}-hover)`,
        },
      };
    case "outlined":
      return {
        base: {
          border: `2px solid ${colorProp}`,
          color: colorProp,
        },
        hover: {
          backgroundColor: colorProp,
          color: "var(--color-white-1000)",
        },
        focus: {
          outlineOffset: "2px",
        },
      };
    case "ghost":
      return {
        base: {
          backgroundColor: "transparent",
          color: "var(--color-secondary)",
          padding: "0",
        },
      };
    default:
      return {};
  }
};

const getDisabledStateStyles = (isDisabled) => {
  if (isDisabled) {
    return {
      base: {
        opacity: "50%",
      },
    };
  }
  return {};
};

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

  const baseStyles = getBaseStyles(props);
  const sizeStyles = getSizeStyles(size);
  const variantStyles = getVariantStyles(variant, colorProp, color);
  const disabledStateStyles = getDisabledStateStyles(props.disabled);

  let combinedStyles = [
    baseStyles,
    sizeStyles,
    variantStyles,
    disabledStateStyles,
  ].reduce(
    (prev, curr) => {
      const mergedStyles = {
        base: { ...prev.base, ...curr.base },
        hover: { ...prev.hover, ...curr.hover },
        focus: { ...prev.focus, ...curr.focus },
      };
      return mergedStyles;
    },
    { base: {} }
  );

  combinedStyles = {
    ...combinedStyles.base,
    "&:hover": { ...combinedStyles.hover },
    "&:focus": { ...combinedStyles.focus },
  };

  const finalCss = props.css
    ? [css(combinedStyles), props.css]
    : css(combinedStyles);

  return (
    <button onClick={onClick} {...props} css={finalCss}>
      {children}
    </button>
  );
}
