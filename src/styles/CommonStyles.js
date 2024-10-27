import { css } from "@emotion/react";

export const colors = {
  orange: "#D87D4A",
  lightOrange: "#FBAF85",
  white: "#FFFFFF",
  black: "#000000",
  lightBlack: "#0E0E0E",
  grey: "#F1F1F1",
  lightGrey: "#FAFAFA",
  primary: "#D87D4A",
  secondary: "#000000",
};

export const overline = css({
  fontFamily: "Manrope",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "19px",
  letterSpacing: "10px",
});

export const subTitle = css({
  fontFamily: "Manrope",
  fontWeight: "700",
  fontSize: "13px",
  lineHeight: "25px",
  letterSpacing: "1px",
  opacity: "50%",
});

export const inputStyles = {
  input: css({
    border: "1px solid #CFCFCF",
    width: "100%",
    height: "3.5rem",
    boxSizing: "border-box",
    borderRadius: "var(--radius-md)",
  }),
  label: css({
    fontWeight: "700",
    fontSize: "12.5px",
  }),
};

// TODO - Switch to md and lg
export const spacing = {
  sm: "10rem",
  md: "10.8rem",
};

export const radius = {
  md: "8px",
  lg: "10px",
};

const breakpoints = [576, 768, 992, 1200];
export const mediaQuery = breakpoints.map(
  (breakpoint) => `@media (max-width: ${breakpoint}px)`
);
