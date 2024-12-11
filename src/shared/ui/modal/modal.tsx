'use client';

import { useMediaQuery } from '../../lib/hooks/use-media-query';
import { Drawer } from '../drawer';

export type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const Modal = ({
  children,
  open,
  onOpenChange,
}: {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return isMobile ? (
    <Drawer open={open} onOpenChange={onOpenChange}>
      {children}
    </Drawer>
  ) : (
    <div>{children}</div>
  );
};
