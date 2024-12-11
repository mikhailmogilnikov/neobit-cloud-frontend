'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { EAppRoutes } from '../../../config/routes';

import { useOriginContext } from '.';

export type BackTriggerProps = {
  fallbackUrl?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const BackTrigger = ({ fallbackUrl = EAppRoutes.BUCKETS, ...rest }: BackTriggerProps) => {
  const router = useRouter();
  const isWithinPage = useOriginContext();

  const handleClick = useCallback(() => {
    if (isWithinPage) router.back();
    else router.replace(fallbackUrl);
  }, [isWithinPage, router]);

  return <button {...rest} onClick={handleClick} />;
};
