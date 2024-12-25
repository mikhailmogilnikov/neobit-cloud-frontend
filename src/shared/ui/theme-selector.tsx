'use client';

import { useTheme } from 'next-themes';
import { PiDevicesBold, PiMoonBold, PiSunBold } from 'react-icons/pi';
import * as m from 'motion/react-m';

import { cn } from '../lib/utils/styling';

import { Flex } from './flex';

export enum ETheme {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

const themes = [
  { id: ETheme.LIGHT, icon: PiSunBold },
  { id: ETheme.DARK, icon: PiMoonBold },
  { id: ETheme.SYSTEM, icon: PiDevicesBold },
];

const pointerPosition = {
  [ETheme.LIGHT]: 0,
  [ETheme.DARK]: 32,
  [ETheme.SYSTEM]: 64,
};

export const ThemeSelectorSkeleton = () => {
  return <div className='bg-default h-[40px] w-[108px] animate-pulse rounded-full' />;
};

export const ThemeSelector = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  if (typeof window === 'undefined') return <ThemeSelectorSkeleton />;

  return (
    <Flex
      align='center'
      className={cn(
        'border-border relative w-min gap-1 rounded-full border px-2 py-1.5',
        className,
      )}
    >
      {themes.map(({ id, icon: Icon }) => (
        <button
          key={id}
          className='z-2 flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full'
          type='button'
          onClick={() => setTheme(id)}
        >
          <Icon size={20} />
        </button>
      ))}
      <m.div className='absolute inset-0 flex items-center px-1.5'>
        <m.span
          animate={{ x: pointerPosition[theme as ETheme] }}
          className='bg-foreground/10 dark:bg-foreground/5 z-1 aspect-square w-8 rounded-full'
          initial={false}
          transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
        />
      </m.div>
    </Flex>
  );
};
