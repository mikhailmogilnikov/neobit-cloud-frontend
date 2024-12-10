import { ThemeConfig } from '../lib/utils/theme';

export const AppThemeConfig: ThemeConfig = {
  prefix: 'theme',
  themes: {
    light: {
      scheme: 'light',
      colors: {
        background: { autoGeneratePalette: false, default: 'hsl(0, 0%, 95%)' },
        foreground: { autoGeneratePalette: false, default: 'hsl(0, 0%, 5%)' },
        border: { autoGeneratePalette: false, default: 'hsl(0, 0%, 88%)' },
        outline: { autoGeneratePalette: false, default: 'hsl(217, 100%, 55%)' },
        content1: { autoGeneratePalette: false, default: 'hsl(0, 0%, 92%)' },
        content2: { autoGeneratePalette: false, default: 'hsl(0, 0%, 89%)' },
        content3: { autoGeneratePalette: false, default: 'hsl(0, 0%, 86%)' },
        content4: { autoGeneratePalette: false, default: 'hsl(0, 0%, 83%)' },
        default: 'hsl(0, 0%, 100%)',
        primary: { default: 'hsl(217, 100%, 55%)' },
        danger: { default: 'hsl(0, 100%, 45%)' },
        warning: { default: 'hsl(40, 97%, 50%)' },
        success: { default: 'hsl(140, 83%, 42%)' },
      },
    },
    dark: {
      scheme: 'dark',
      colors: {
        background: { autoGeneratePalette: false, default: 'hsl(0, 0%, 5%)' },
        foreground: { autoGeneratePalette: false, default: 'hsl(0, 0%, 95%)' },
        border: { autoGeneratePalette: false, default: 'hsl(0, 0%, 15%)' },
        outline: { autoGeneratePalette: false, default: 'hsl(0, 0%, 30%)' },
        content1: { autoGeneratePalette: false, default: 'hsl(0, 0%, 8%)' },
        content2: { autoGeneratePalette: false, default: 'hsl(0, 0%, 11%)' },
        content3: { autoGeneratePalette: false, default: 'hsl(0, 0%, 14%)' },
        content4: { autoGeneratePalette: false, default: 'hsl(0, 0%, 17%)' },
        default: 'hsl(0, 0%, 15%)',
        primary: { default: 'hsl(217, 97%, 59%)', foreground: 'hsl(0, 0%, 100%)' },
        danger: { default: 'hsl(0, 63%, 49%)', foreground: 'hsl(0, 0%, 100%)' },
        warning: { default: 'hsl(40, 68.93%, 51.21%)', foreground: 'hsl(0, 0%, 0%)' },
        success: { default: 'hsl(140, 68.93%, 44.29%)', foreground: 'hsl(0, 0%, 100%)' },
      },
    },
  },
};
