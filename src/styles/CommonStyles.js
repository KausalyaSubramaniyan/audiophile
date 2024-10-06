import { css } from "@emotion/react";

export const colors = {
  orange: "#D87D4A",
  lightOrange: "#FBAF85",
  white: "#FFFFFF",
  black: "#000000",
  lightBlack: "#0E0E0E",
  grey: "#F1F1F1",
  lightGrey: "#FAFAFA",
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
});

export const spacing = {
  md: "10rem",
};

export const buttonStyles = (color, backgroundColor) => {
  return css({
    color,
    backgroundColor,
    height: "50px",
    width: "160px",
  });
};
