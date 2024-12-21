import {
  Dialog as RadixDialog,
  DialogProps as RadixDialogProps,
  Overlay,
  Content,
  Close,
  DialogPortal,
  DialogTitle as RadixDialogTitle,
  DialogDescription as RadixDialogDescription,
} from '@radix-ui/react-dialog';
import { PiXBold } from 'react-icons/pi';

import { cn } from '../../lib/utils/styling';

export interface DialogProps extends RadixDialogProps {
  hideClose?: boolean;
}

export const Dialog = (props: DialogProps) => {
  const { children, hideClose, ...rest } = props;

  return (
    <RadixDialog {...rest}>
      <DialogPortal>
        <Overlay className='data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out fixed inset-0 z-50 bg-black/50' />
        <Content className='bg-background data-[state=open]:animate-dialog-in data-[state=closed]:animate-dialog-out fixed top-1/2 left-1/2 z-60 max-h-[80svh] w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg'>
          <Close className='bg-content2 absolute top-6 right-6 rounded-full p-1'>
            <PiXBold className='h-5 w-5 opacity-30' />
          </Close>
          <div className='flex flex-col gap-4 overflow-y-auto p-6'>{children}</div>
        </Content>
      </DialogPortal>
    </RadixDialog>
  );
};

export interface DialogTitleProps {
  children?: React.ReactNode;
  className?: string;
  hidden?: boolean;
}

export const DialogTitle = ({ children, className, hidden }: DialogTitleProps) => {
  const titleClassname = cn('text-xl font-semibold', hidden && 'hidden', className);

  return <RadixDialogTitle className={titleClassname}>{children}</RadixDialogTitle>;
};

export interface DialogDescriptionProps {
  children?: React.ReactNode;
  hidden?: boolean;
  className?: string;
}

export const DialogDescription = ({ children, hidden, className }: DialogDescriptionProps) => {
  const descriptionClassname = cn(
    'text-foreground/50 text-sm font-medium',
    hidden && 'hidden',
    className,
  );

  return (
    <RadixDialogDescription className={descriptionClassname}>{children}</RadixDialogDescription>
  );
};

export const DialogHeader = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const headerClassname = cn('flex flex-col gap-3 p-6', className);

  return <div className={headerClassname}>{children}</div>;
};
