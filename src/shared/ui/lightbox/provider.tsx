'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { LightboxContextProvider } from './context';

interface LightboxProviderProps {
  children: ReactNode;
}

const DynamicLightbox = dynamic(() => import('./lightbox').then((mod) => mod.Lightbox), {
  ssr: false,
});

export const LightboxProvider = ({ children }: LightboxProviderProps) => {
  return (
    <LightboxContextProvider>
      <DynamicLightbox />
      {children}
    </LightboxContextProvider>
  );
};
