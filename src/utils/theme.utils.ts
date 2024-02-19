import { moderateScale, scale } from "./scale.utils";

export const palette = {
  white: "#ffffff",
  black: "#000000",
  black100: "#00000099",
};

export const theme = {
  colors: {
    ...palette,
    white: palette.white,
    overlay: palette.black100,
  },
  utils: {
    scale,
    moderateScale,
  },
} as const;

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;
