import s from './Label.module.css';

export interface LabelProps {
  icon: string;
  text: string | boolean;
}

export default function Label({ icon, text }: LabelProps) {
  return (
    <div className={s.labelContainer}>
      <svg width={20} height={20} className={s.labelIcon}>
        <use href={icon}></use>
      </svg>
      <p className={s.labelText}>{text}</p>
    </div>
  );
}
