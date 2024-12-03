import { generateColorVariableFromObject, generateColorVariableFromString } from './color-utils';
import { ThemeConfig } from './types';

type ColorVariables = Record<string, string>;

export const generateThemeVariables = (themes: ThemeConfig) => {
  const { prefix = 'theme', themes: themesList } = themes;

  let themeColorVariables: Record<string, ColorVariables> = {};

  Object.entries(themesList).map(([key, theme]) => {
    let cssSelector = `.${key}`;
    let colorVariables: ColorVariables = {};

    const { colors, scheme = 'light' } = theme;

    Object.entries(colors).forEach(([colorKey, colorValue]) => {
      if (typeof colorValue === 'string') {
        colorVariables = {
          ...colorVariables,
          ...generateColorVariableFromString(colorKey, colorValue, prefix, scheme),
        };
      }
      if (typeof colorValue === 'object') {
        colorVariables = {
          ...colorVariables,
          ...generateColorVariableFromObject(colorKey, colorValue, prefix, scheme),
        };
      }
    });

    themeColorVariables[cssSelector] = colorVariables;
  });

  return themeColorVariables;
};

export const parseThemeVariablesToCssString = (themes: ThemeConfig) => {
  const themeVariables = generateThemeVariables(themes);

  return Object.entries(themeVariables)
    .map(([selector, variables]) => {
      return `html${selector} { ${Object.entries(variables)
        .map(([key, value]) => `${key}: ${value};`)
        .join(' ')} }`;
    })
    .join(' ');
};
