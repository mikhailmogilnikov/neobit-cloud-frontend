import { forwardRef, InputHTMLAttributes, ReactNode, RefObject } from 'react';

import { Squircle } from '../../squircle';

import { inputTV } from './classnames';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputRef?: RefObject<HTMLInputElement>;
  startContent?: ReactNode;
  endContent?: ReactNode;
  sizes?: 'sm' | 'md' | 'lg';
};

export const Input = forwardRef<HTMLLabelElement, InputProps>((props, ref) => {
  const { className, endContent, startContent, inputRef, sizes: size, ...inputProps } = props;

  const { root, input, startWrapper, endWrapper } = inputTV({ size });

  return (
    <Squircle asChild>
      <label ref={ref} className={root({ className })}>
        {startContent && <span className={startWrapper()}>{startContent}</span>}
        <input ref={inputRef} className={input()} {...inputProps} />
        {endContent && <span className={endWrapper()}>{endContent}</span>}
      </label>
    </Squircle>
  );
});

Input.displayName = 'Input';
