import { AppThemeConfig } from '../../../config/theme';

export const updateThemeColor = (resolvedTheme: string) => {
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  const lightBackground = AppThemeConfig.themes.light.colors.background;
  const darkBackground = AppThemeConfig.themes.dark.colors.background;

  const lightThemeColor =
    typeof lightBackground === 'object' ? lightBackground.default : lightBackground;
  const darkThemeColor =
    typeof darkBackground === 'object' ? darkBackground.default : darkBackground;

  if (themeColorMeta) {
    if (resolvedTheme === 'light') {
      themeColorMeta.setAttribute('content', lightThemeColor!);
    }
    if (resolvedTheme === 'dark') {
      themeColorMeta.setAttribute('content', darkThemeColor!);
    }
  }
};
