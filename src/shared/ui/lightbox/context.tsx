'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

type LightboxContextType = {
  lightboxId: string | null;
  activeContentId: string | null;
  setLightboxId: (lightboxId: string | null) => void;
  closeLightbox: () => void;
  setActiveContentId: (contentId: string | null) => void;
};

export const LightboxContext = createContext<LightboxContextType>({
  lightboxId: null,
  activeContentId: null,
  setActiveContentId: () => {},
  setLightboxId: () => {},
  closeLightbox: () => {},
});

export const LightboxContextProvider = ({ children }: { children: ReactNode }) => {
  const [lightboxId, setLightboxId] = useState<string | null>(null);
  const [activeContentId, setActiveContentId] = useState<string | null>(null);

  const closeLightbox = () => {
    setActiveContentId(null);
    setLightboxId(null);
  };

  return (
    <LightboxContext.Provider
      value={{ lightboxId, setLightboxId, closeLightbox, activeContentId, setActiveContentId }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);

  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }

  return context;
};
