import { useState } from 'react';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';

import { Input, InputProps } from './input';

export const InputPassword = ({ ...props }: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsVisible((prev) => !prev);
  };

  const renderHideButton = () => {
    return (
      <button
        className='opacity-50 transition-opacity hover:opacity-100'
        type='button'
        onClick={handleChangeVisibility}
      >
        {isVisible ? <PiEyeClosedBold size={20} /> : <PiEyeBold size={20} />}
      </button>
    );
  };

  return (
    <Input endContent={renderHideButton()} type={isVisible ? 'text' : 'password'} {...props} />
  );
};
