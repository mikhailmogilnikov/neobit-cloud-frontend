'use client';

import { ThemeProvider } from 'next-themes';

import { ThemeColorProvider } from '@/src/shared/lib/providers/theme-color-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      enableSystem
      attribute='class'
      defaultTheme='system'
      storageKey='theme'
    >
      <ThemeColorProvider>{children}</ThemeColorProvider>
    </ThemeProvider>
  );
}
