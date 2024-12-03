import { readableColor, toHsla } from 'color2k';

import { ThemeColorObject, ThemeScheme } from './types';

export const parseColorToHSL = (color: string) => {
  const hslaColor = toHsla(color);
  const [h, s, l] = hslaColor.slice(5).split(', ').slice(0, 3);

  return [h, s, l];
};

export const createHslString = (color: string) => {
  const [h, s, l] = parseColorToHSL(color);

  return `${h}, ${s}, ${l}`;
};

export const generatePalette = (
  colorName: string,
  colorValue: string,
  prefix: string,
  scheme: ThemeScheme,
) => {
  return scheme === 'light'
    ? {
        [`--${prefix}-${colorName}-50`]: `hsl(from ${colorValue} h s 95%)`,
        [`--${prefix}-${colorName}-100`]: `hsl(from ${colorValue} h s 90%)`,
        [`--${prefix}-${colorName}-200`]: `hsl(from ${colorValue} h s 80%)`,
        [`--${prefix}-${colorName}-300`]: `hsl(from ${colorValue} h s 70%)`,
        [`--${prefix}-${colorName}-400`]: `hsl(from ${colorValue} h s 60%)`,
        [`--${prefix}-${colorName}-500`]: `hsl(from ${colorValue} h s 50%)`,
        [`--${prefix}-${colorName}-600`]: `hsl(from ${colorValue} h s 40%)`,
        [`--${prefix}-${colorName}-700`]: `hsl(from ${colorValue} h s 30%)`,
        [`--${prefix}-${colorName}-800`]: `hsl(from ${colorValue} h s 20%)`,
        [`--${prefix}-${colorName}-900`]: `hsl(from ${colorValue} h s 10%)`,
        [`--${prefix}-${colorName}-950`]: `hsl(from ${colorValue} h s 5%)`,
      }
    : {
        [`--${prefix}-${colorName}-50`]: `hsl(from ${colorValue} h s 5%)`,
        [`--${prefix}-${colorName}-100`]: `hsl(from ${colorValue} h s 10%)`,
        [`--${prefix}-${colorName}-200`]: `hsl(from ${colorValue} h s 20%)`,
        [`--${prefix}-${colorName}-300`]: `hsl(from ${colorValue} h s 30%)`,
        [`--${prefix}-${colorName}-400`]: `hsl(from ${colorValue} h s 40%)`,
        [`--${prefix}-${colorName}-500`]: `hsl(from ${colorValue} h s 50%)`,
        [`--${prefix}-${colorName}-600`]: `hsl(from ${colorValue} h s 60%)`,
        [`--${prefix}-${colorName}-700`]: `hsl(from ${colorValue} h s 70%)`,
        [`--${prefix}-${colorName}-800`]: `hsl(from ${colorValue} h s 80%)`,
        [`--${prefix}-${colorName}-900`]: `hsl(from ${colorValue} h s 90%)`,
        [`--${prefix}-${colorName}-950`]: `hsl(from ${colorValue} h s 95%)`,
      };
};

export const generateColorVariableFromString = (
  colorKey: string,
  colorValue: string,
  prefix: string,
  scheme: ThemeScheme,
) => {
  return {
    [`--${prefix}-${colorKey}`]: colorValue,
    [`--${prefix}-${colorKey}-foreground`]: readableColor(colorValue),
    ...generatePalette(colorKey, colorValue, prefix, scheme),
  };
};

export const generateColorVariableFromObject = (
  colorKey: string,
  colorValue: ThemeColorObject,
  prefix: string,
  scheme: ThemeScheme,
) => {
  const {
    autoGeneratePalette = true,
    default: defaultColor,
    foreground: foregroundColor = readableColor(defaultColor),
    ...paletteColors
  } = colorValue;

  const generatedPaletteColors = Object.entries(paletteColors).map(([key, value]) => ({
    [`--${prefix}-${colorKey}-${key}`]: value,
  }));

  return {
    [`--${prefix}-${colorKey}`]: defaultColor,
    [`--${prefix}-${colorKey}-foreground`]: foregroundColor,

    ...(autoGeneratePalette ? generatePalette(colorKey, defaultColor, prefix, scheme) : {}),

    ...generatedPaletteColors[0],
  };
};
