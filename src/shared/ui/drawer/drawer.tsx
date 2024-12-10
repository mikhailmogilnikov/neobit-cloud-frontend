'use client';

import { Drawer as VaulDrawer, DialogProps } from 'vaul';
import { PiXBold } from 'react-icons/pi';

import { cn } from '../../lib/utils/styling';

export type DrawerProps = DialogProps & {
  hideThumb?: boolean;
  hideClose?: boolean;
};

export const Drawer = (props: DrawerProps) => {
  const { hideThumb = false, hideClose = false, open, onOpenChange, children, ...rest } = props;

  // useUpdateThemeColor({ isOpen: open ?? false });

  return (
    <VaulDrawer.Root
      open={open}
      shouldScaleBackground={false}
      onOpenChange={onOpenChange}
      {...rest}
    >
      <VaulDrawer.Portal>
        <VaulDrawer.Overlay className='fixed inset-0 z-8900 bg-black/40' />

        <VaulDrawer.Content className='bg-background fixed right-0 bottom-0 left-0 z-9000 h-fit max-h-[95svh] rounded-t-lg outline-none'>
          <div className='overflow-hidden'>
            {!hideThumb && (
              <div
                className='fixed top-0 right-0 left-0 flex h-6 items-center justify-center'
                id='drawer-header'
              >
                <div
                  aria-hidden
                  className='bg-content4 mx-auto mt-4 h-1.5 w-10 flex-shrink-0 rounded-full'
                  id='drawer-thumb'
                />
              </div>
            )}
            {!hideClose && (
              <VaulDrawer.Close className='bg-content2 absolute top-4 right-4 rounded-full p-1'>
                <PiXBold className='h-4.5 w-4.5 opacity-30' />
              </VaulDrawer.Close>
            )}
            <div className='max-h-[95svh] overflow-y-auto'>{children}</div>
          </div>
        </VaulDrawer.Content>
      </VaulDrawer.Portal>
    </VaulDrawer.Root>
  );
};

export const DrawerTitle = ({
  children,
  className,
  hidden,
}: {
  children: React.ReactNode;
  hidden?: boolean;
  className?: string;
}) => {
  const titleClassname = cn(
    'mt-8 py-4 text-center text-2xl font-semibold',
    hidden && 'hidden',
    className,
  );

  return <VaulDrawer.Title className={titleClassname}>{children}</VaulDrawer.Title>;
};

export const DrawerDescription = ({
  children,
  hidden,
  className,
}: {
  children: React.ReactNode;
  hidden?: boolean;
  className?: string;
}) => {
  const descriptionClassname = cn('text-center text-sm font-medium', hidden && 'hidden', className);

  return (
    <VaulDrawer.Description className={descriptionClassname}>{children}</VaulDrawer.Description>
  );
};
