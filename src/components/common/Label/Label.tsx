import clsx from 'clsx';
import s from './Label.module.css';

export interface LabelProps {
  icon: string;
  text: string | boolean;
  className: string;
}

export default function Label({ icon, text, className }: LabelProps) {
  return (
    <div className={s.labelContainer}>
      <svg width={20} height={20} className={clsx(s.labelIcon, className)}>
        <use href={icon}></use>
      </svg>
      <p className={s.labelText}>{text}</p>
    </div>
  );
}
