import { useTheme } from 'next-themes';
import { useEffect } from 'react';

import { updateThemeColor } from '../../lib/providers/theme-color-provider/update-theme-color';

export const useUpdateThemeColor = ({ isOpen }: { isOpen: boolean }) => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      const themeColorMeta = document.querySelector('meta[name="theme-color"]');

      themeColorMeta?.setAttribute('content', 'black');
    } else {
      updateThemeColor(resolvedTheme as 'light' | 'dark');
    }
  }, [isOpen]);
};
