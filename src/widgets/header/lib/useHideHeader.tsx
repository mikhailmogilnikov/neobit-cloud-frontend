import { useMotionValueEvent, useScroll } from 'motion/react';
import { useState } from 'react';

export const useHideHeader = () => {
  const { scrollY } = useScroll();
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (current) => {
    const diff = current - (scrollY.getPrevious() ?? 0);
    const isScrollingDown = diff > 0;
    const isHeaderOnTop = current < 64;

    if (isScrollingDown && !isHeaderOnTop && !isHeaderHidden) {
      setIsHeaderHidden(true);
    } else if ((!isScrollingDown || isHeaderOnTop) && isHeaderHidden) {
      setIsHeaderHidden(false);
    }
  });

  return {
    isHeaderHidden,
  };
};
