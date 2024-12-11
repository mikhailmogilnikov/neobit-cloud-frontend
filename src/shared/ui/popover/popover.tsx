'use client';

import {
  PopoverContentProps,
  PopoverContent as PopoverContentPrimitive,
} from '@radix-ui/react-popover';

import { cn } from '../../lib/utils/styling';
import { Squircle } from '../squircle';

export const PopoverContent = (props: PopoverContentProps) => {
  const { className, sideOffset = 10, ...rest } = props;

  const popoverContentClassNames = cn(
    'bg-default text-content3-foreground data-[state=open]:animate-popover-in data-[state=closed]:animate-popover-out z-10000 flex w-fit origin-top flex-col gap-1 rounded-md p-2 outline-none',
    className,
  );

  return (
    <Squircle asChild>
      <PopoverContentPrimitive
        className={popoverContentClassNames}
        sideOffset={sideOffset}
        {...rest}
      />
    </Squircle>
  );
};
