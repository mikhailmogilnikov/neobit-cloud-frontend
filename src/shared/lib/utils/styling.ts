import type { Config } from 'tailwind-merge';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { tv as tvBase, TV, ClassValue } from 'tailwind-variants';

export const twMergeConfig: Partial<Config<string, string>> = {
  theme: {},
  classGroups: {},
};

export const tv: TV = (options, config) =>
  tvBase(options, {
    ...config,
    twMerge: config?.twMerge ?? true,
    twMergeConfig: {
      ...config?.twMergeConfig,
      theme: {
        ...config?.twMergeConfig?.theme,
        ...twMergeConfig.theme,
      },
      classGroups: {
        ...config?.twMergeConfig?.classGroups,
        ...twMergeConfig.classGroups,
      },
    },
  });

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
