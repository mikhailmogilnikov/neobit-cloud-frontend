import { Metadata, Viewport } from 'next';

export const GlobalAppConfig = {
  name: 'NeoBit Cloud',
  description: 'Облачное хранилище для ваших данных на основе S3',
};

export const GlobalAppMetadata: Metadata = {
  title: GlobalAppConfig.name,
  description: GlobalAppConfig.description,
};

export const GlobalAppViewport: Viewport = {
  width: 'device-width',
  height: 'device-height',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};
