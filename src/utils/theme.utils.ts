import { moderateScale, scale } from "./scale.utils";

export const palette = {
  pink100: "#FFF8FA",
  pink200: "#FFF0F5",
  pink300: "#FFE5EE",
  pink400: "#FFB4CD",
  pink500: "#FF5B91",

  gray100: "#F0F0F0",
  gray200: "#E5E5E5",
  gray300: "#CCCCCC",
  gray400: "#A2A2A2",
  gray500: "#808080",
  gray600: "#333333",

  purple100: "#FAF6FF",
  purple200: "#D1B6FF",
  purple300: "#5C27B2",
  purple400: "#3D1B3B",

  yellow100: "#FFFBED",
  yellow200: "#FFCF50",

  orange100: "#FE923B",

  white: "#ffffff",
  black: "#000000",
  black100: "#00000099",
};

export const theme = {
  colors: {
    ...palette,
    primaryAccent: palette.pink500,
    primaryText: palette.gray600,
    white: palette.white,
    stroke: palette.gray200,
    overlay: palette.black100,
  },
  fonts: {
    /** Lato */
    primaryLight: "primaryLight",
    primaryRegular: "primaryRegular",
    primaryBold: "primaryBold",
    /** CenturyGothic */
    secondaryRegular: "secondaryRegular",
    secondaryBold: "secondaryBold",
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
