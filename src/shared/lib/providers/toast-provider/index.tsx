'use client';

import { useTheme } from 'next-themes';
import { Toaster } from 'sonner';

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <Toaster richColors dir='auto' theme={resolvedTheme as 'light' | 'dark'} toastOptions={{}} />
      {children}
    </>
  );
};
