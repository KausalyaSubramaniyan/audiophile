import { css } from "@emotion/react";

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

export const centerAlign = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const line = css({
  background: "var(--color-white-1000)",
  opacity: "20%",
  height: "1px",
  margin: "0rem var(--side-spacing)",
});

const breakpoints = [576, 768, 992, 1200];
const screenSizes = ["sm", "md", "lg", "xl"];
export const mediaQuery = {};
export const mediaQueryCondition = {};

// mediaQueryCondition is used in Picture component
breakpoints.map((breakpoint, index) => {
  mediaQueryCondition[screenSizes[index]] = `(max-width: ${breakpoint}px)`;
});

breakpoints.map((breakpoint, index) => {
  mediaQuery[screenSizes[index]] = `@media ${mediaQueryCondition[screenSizes[index]]}`;
});
