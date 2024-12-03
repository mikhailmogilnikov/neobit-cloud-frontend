export type ThemeScheme = 'light' | 'dark';

export type ThemeColorObject = {
  autoGeneratePalette?: boolean;
  default: string;
  foreground?: string;
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  950?: string;
};

export type ThemeColor = string | ThemeColorObject;

export type ThemeColors = {
  background?: ThemeColor;
  foreground?: ThemeColor;
  border?: ThemeColor;

  content1?: ThemeColor;
  content2?: ThemeColor;
  content3?: ThemeColor;
  content4?: ThemeColor;
  default?: ThemeColor;

  primary?: ThemeColor;
  secondary?: ThemeColor;
  tertiary?: ThemeColor;

  success?: ThemeColor;
  warning?: ThemeColor;
  error?: ThemeColor;
};

export type Theme = {
  scheme?: ThemeScheme;
  colors: ThemeColors;
};

export type ThemeConfig = {
  prefix?: string;
  themes: {
    [key: string]: Theme;
  };
};
