import clsx from 'clsx';
import s from './FilterInput.module.css';
import type { Dispatch, SetStateAction } from 'react';
import type { FiltersInitialState } from '../../../redux/filters/filterSlice';

export type InputTypes = 'checkbox' | 'radio';

export interface FilterInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes;
  name: string;
  icon: string;
  text: string;
  className?: string;
  filterKey: keyof FiltersInitialState;
  value?: string;
  localFilters: FiltersInitialState;
  setLocalFilters: Dispatch<SetStateAction<FiltersInitialState>>;
}

export default function FilterInput({
  type,
  name,
  icon,
  text,
  className,
  filterKey,
  value,
  localFilters,
  setLocalFilters,
  ...rest
}: FilterInputProps) {
  const filterValue = localFilters?.[filterKey];

  let isChecked = false;
  if (typeof filterValue === 'boolean') {
    isChecked = filterValue;
  } else if (typeof filterValue === 'string') {
    isChecked = filterValue === value;
  }

  const handleClick = () => {
    if (type === 'radio') {
      const newValue = isChecked ? '' : value;
      setLocalFilters(prev => ({ ...prev, [filterKey]: newValue }));
    } else {
      setLocalFilters(prev => ({ ...prev, [filterKey]: !isChecked }));
    }
  };

  return (
    <div className={clsx(s.checkboxContainer, className)} onClick={handleClick}>
      <input
        id={rest.id}
        type={type}
        name={name}
        className='visually-hidden'
        checked={isChecked}
        {...rest}
        readOnly
      />
      <svg className={s.checkboxIcon} width={32} height={32}>
        <use href={icon}></use>
      </svg>
      <p className={s.checkboxText}>{text}</p>
    </div>
  );
}
