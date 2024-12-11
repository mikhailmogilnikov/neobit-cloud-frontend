import type { Metadata, Viewport } from 'next';

import './css/globals.css';

import { clsx } from 'clsx';

import { GlobalAppMetadata, GlobalAppViewport } from '@/src/shared/config/app-config';
import { FontSans } from '@/src/shared/config/fonts';
import { parseThemeVariablesToCssString } from '@/src/shared/lib/utils/theme/generate-theme-variables';
import { AppThemeConfig } from '@/src/shared/config/theme';

import Providers from './providers';

export const metadata: Metadata = GlobalAppMetadata;
export const viewport: Viewport = GlobalAppViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cssLine = parseThemeVariablesToCssString(AppThemeConfig);

  return (
    <html suppressHydrationWarning dir='ltr' lang='ru'>
      <head>
        <meta content='hsl(0, 0%, 5%)' name='theme-color' />
        <style>{cssLine}</style>
      </head>
      <body
        className={clsx(
          'bg-background text-foreground font-sans antialiased select-none',
          FontSans.variable,
        )}
      >
        <Providers>
          <div data-vaul-drawer-wrapper className='bg-background min-h-svh'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
