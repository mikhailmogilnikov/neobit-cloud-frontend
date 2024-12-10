import { HTMLAttributes } from 'react';

import { skeletonTV } from './classnames';

export type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export const Skeleton = (props: SkeletonProps) => {
  const { className, ...rest } = props;

  const skeletonClassNames = skeletonTV({ className });

  return <div className={skeletonClassNames} {...rest} />;
};

Skeleton.displayName = 'Skeleton';
