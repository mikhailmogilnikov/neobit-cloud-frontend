import type { Metadata, Viewport } from 'next';

import './css/globals.css';
import './css/colors.css';

import { clsx } from 'clsx';

import { GlobalAppMetadata, GlobalAppViewport } from '@/src/shared/config/app-config';
import { FontSans } from '@/src/shared/config/fonts';

import Providers from './providers';

export const metadata: Metadata = GlobalAppMetadata;
export const viewport: Viewport = GlobalAppViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning dir='ltr' lang='ru'>
      <body
        className={clsx('bg-background text-foreground font-sans antialiased', FontSans.variable)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
