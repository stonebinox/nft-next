import pixelToRem from "./pixel-to-rem";

const BASE_SPACING_PIXELS = 16;
const MAX_SCREEN = pixelToRem(1140);

const DOUBLE_BASE_SPACING = pixelToRem(BASE_SPACING_PIXELS * 2);
const BASE_SPACING_AND_HALF = pixelToRem(BASE_SPACING_PIXELS * 1.5);
const BASE_SPACING = pixelToRem(BASE_SPACING_PIXELS);
const HALF_BASE_SPACING = pixelToRem(BASE_SPACING_PIXELS / 2);
const QUARTER_BASE_SPACING = pixelToRem(BASE_SPACING_PIXELS / 4);

const customSpacing = pixelToRem;

export {
  BASE_SPACING,
  HALF_BASE_SPACING,
  QUARTER_BASE_SPACING,
  DOUBLE_BASE_SPACING,
  BASE_SPACING_AND_HALF,
  MAX_SCREEN,
  customSpacing,
};
