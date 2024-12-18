'use client';

import { ThemeProvider } from 'next-themes';
import { LazyMotion, MotionConfig } from 'motion/react';

import { ThemeColorProvider } from '@/src/shared/lib/providers/theme-color-provider';

const loadFeatures = () => import('@/src/shared/lib/motion').then((res) => res.default);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion strict features={loadFeatures}>
      <MotionConfig transition={{ duration: 0.5, type: 'spring', bounce: 0 }}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute='class'
          defaultTheme='system'
          storageKey='theme'
        >
          <ThemeColorProvider>{children}</ThemeColorProvider>
        </ThemeProvider>
      </MotionConfig>
    </LazyMotion>
  );
}
