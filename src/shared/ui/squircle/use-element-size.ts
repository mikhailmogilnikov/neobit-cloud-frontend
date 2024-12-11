import { useCallback, useRef, useState } from 'react';

import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

interface Size {
  width: number;
  height: number;
  borderRadius: number;
  borderRadiuses: {
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
  };
}

const nullSizes = {
  width: 0,
  height: 0,
  borderRadius: 0,
  borderRadiuses: {
    borderTopLeftRadius: undefined,
    borderTopRightRadius: undefined,
    borderBottomLeftRadius: undefined,
    borderBottomRightRadius: undefined,
  },
};

function throttle(callback: () => void, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let lastCall = 0;

  return () => {
    const now = Date.now();

    if (now - lastCall >= delay) {
      callback();
      lastCall = now;
    } else if (!timeoutId) {
      timeoutId = setTimeout(
        () => {
          callback();
          lastCall = Date.now();
          timeoutId = null;
        },
        delay - (now - lastCall),
      );
    }
  };
}

export function useElementSize<T extends HTMLElement = HTMLDivElement>(
  resizable: boolean,
  throttlingDelayMs: number = 100,
): [(node: T | null) => void, Size] {
  const [ref, setRef] = useState<T | null>(null);
  const [size, setSize] = useState<Size>(nullSizes);

  const prevBorderRadiusRef = useRef<string | null>(null);

  const handleSize = useCallback(() => {
    if (!ref) return;

    const style = window.getComputedStyle(ref);
    const borderRadius = parseFloat(style.borderRadius);

    setSize({
      width: ref.offsetWidth ?? 0,
      height: ref.offsetHeight ?? 0,
      borderRadius: borderRadius ?? 0,
      borderRadiuses: {
        borderTopLeftRadius: parseFloat(style.borderTopLeftRadius) ?? undefined,
        borderTopRightRadius: parseFloat(style.borderTopRightRadius) ?? undefined,
        borderBottomLeftRadius: parseFloat(style.borderBottomLeftRadius) ?? undefined,
        borderBottomRightRadius: parseFloat(style.borderBottomRightRadius) ?? undefined,
      },
    });
  }, [ref, setSize]);

  const throttledHandleSize = useCallback(() => {
    if (throttlingDelayMs > 0) {
      const throttled = throttle(handleSize, throttlingDelayMs);

      throttled();
    } else {
      handleSize();
    }
  }, [handleSize, throttlingDelayMs]);

  useIsomorphicLayoutEffect(() => {
    if (!ref) return;

    if (!resizable) {
      handleSize();

      return;
    }

    const resizeObserver = new ResizeObserver(throttledHandleSize);

    const mutationObserver = new MutationObserver(() => {
      const style = window.getComputedStyle(ref);
      const currentBorderRadius = style.borderRadius;

      if (currentBorderRadius !== prevBorderRadiusRef.current) {
        prevBorderRadiusRef.current = currentBorderRadius;
        throttledHandleSize();
      }
    });

    resizeObserver.observe(ref);
    mutationObserver.observe(ref, { attributes: true, attributeFilter: ['class', 'style'] });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [ref, throttledHandleSize]);

  return [setRef, size];
}
