'use client';

import { ThemeProvider } from 'next-themes';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      enableSystem
      attribute='class'
      defaultTheme='light'
      storageKey='theme'
    >
      {children}
    </ThemeProvider>
  );
}
