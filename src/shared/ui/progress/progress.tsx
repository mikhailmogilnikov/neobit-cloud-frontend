import * as m from 'motion/react-m';

export type ProgressProps = {
  progress: number;
};

export const Progress = ({ progress = 0 }: ProgressProps) => {
  return (
    <div className='bg-content2 h-2.5 w-full rounded-full'>
      <m.div
        layout
        animate={{ width: `${progress}%` }}
        className='bg-default-200 dark:bg-default-300 h-full rounded-l-full'
        initial={{ width: 0 }}
        transition={{ duration: 0.5, type: 'spring', bounce: 0 }}
      />
    </div>
  );
};
