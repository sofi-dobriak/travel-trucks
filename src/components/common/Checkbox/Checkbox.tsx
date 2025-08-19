import clsx from 'clsx';
import s from './Checkbox.module.css';
import { useState } from 'react';

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  icon: string;
  text: string;
  className?: string;
}

export default function Checkbox({ icon, text, className, ...rest }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <label className={clsx(s.checkboxContainer, className)} onClick={handleClick}>
      <input type='checkbox' className='visually-hidden' checked={isChecked} {...rest} />
      <svg className={s.checkboxIcon} width={32} height={32}>
        <use href={icon}></use>
      </svg>
      <p className={s.checkboxText}>{text}</p>
    </label>
  );
}
