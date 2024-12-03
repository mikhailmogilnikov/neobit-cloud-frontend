import { ThemeConfig } from '../utils/theme';

export const AppThemeConfig: ThemeConfig = {
  prefix: 'theme',
  themes: {
    light: {
      scheme: 'light',
      colors: {
        background: { autoGeneratePalette: false, default: 'hsl(0, 0%, 95%)' },
        foreground: { autoGeneratePalette: false, default: 'hsl(0, 0%, 5%)' },
        border: { autoGeneratePalette: false, default: 'hsl(0, 0%, 85%)' },
        default: {
          autoGeneratePalette: true,
          default: 'hsl(0, 0%, 85%)',
        },
      },
    },
    dark: {
      scheme: 'dark',
      colors: {
        background: { autoGeneratePalette: false, default: 'hsl(0, 0%, 5%)' },
        foreground: { autoGeneratePalette: false, default: 'hsl(0, 0%, 95%)' },
        border: { autoGeneratePalette: false, default: 'hsl(0, 0%, 15%)' },
        default: {
          autoGeneratePalette: true,
          default: 'hsl(0, 0%, 10%)',
        },
      },
    },
  },
};
