'use client';

import { useMediaQuery } from '../../lib/hooks/use-media-query';
import { Dialog } from '../dialog';
import {
  DialogDescription,
  DialogDescriptionProps,
  DialogProps,
  DialogTitle,
  DialogTitleProps,
} from '../dialog/dialog';
import { Drawer } from '../drawer';
import {
  DrawerDescription,
  DrawerDescriptionProps,
  DrawerProps,
  DrawerTitle,
  DrawerTitleProps,
} from '../drawer/drawer';

export type ModalProps = {
  children?: React.ReactNode;
  open: boolean;
  onOpenChange: () => void;
  dialogProps?: DialogProps;
  drawerProps?: DrawerProps;
};

export const Modal = ({ children, open, onOpenChange, dialogProps, drawerProps }: ModalProps) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return isMobile ? (
    <Drawer open={open} onOpenChange={onOpenChange} {...drawerProps}>
      {children}
    </Drawer>
  ) : (
    <Dialog open={open} onOpenChange={onOpenChange} {...dialogProps}>
      {children}
    </Dialog>
  );
};

export interface ModalTitleProps {
  children?: React.ReactNode;
  drawerProps?: DrawerTitleProps;
  dialogProps?: DialogTitleProps;
}

export const ModalTitle = ({ children, drawerProps, dialogProps }: ModalTitleProps) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return isMobile ? (
    <DrawerTitle {...drawerProps}>{children}</DrawerTitle>
  ) : (
    <DialogTitle {...dialogProps}>{children}</DialogTitle>
  );
};

export interface ModalDescriptionProps {
  children?: React.ReactNode;
  drawerProps?: DrawerDescriptionProps;
  dialogProps?: DialogDescriptionProps;
}

export const ModalDescription = ({ children, drawerProps, dialogProps }: ModalDescriptionProps) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return isMobile ? (
    <DrawerDescription {...drawerProps}>{children}</DrawerDescription>
  ) : (
    <DialogDescription {...dialogProps}>{children}</DialogDescription>
  );
};
