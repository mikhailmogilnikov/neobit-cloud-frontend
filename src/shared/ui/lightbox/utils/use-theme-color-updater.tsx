import { useEffect, useState } from 'react';

export const useThemeColorUpdater = (activeContentId: string | null) => {
  const [savedThemeColor, setSavedThemeColor] = useState<string | null>(null);

  useEffect(() => {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');

    if (activeContentId) {
      setSavedThemeColor(themeColorMeta?.getAttribute('content') || null);
      themeColorMeta?.setAttribute('content', 'black');
    } else if (savedThemeColor) {
      themeColorMeta?.setAttribute('content', savedThemeColor);
    }
  }, [activeContentId]);

  return null;
};
