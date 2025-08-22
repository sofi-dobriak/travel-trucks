import clsx from 'clsx';
import s from './FilterInput.module.css';
import { useAppDispatch } from '../../../redux/hooks';
import { useSelector } from 'react-redux';
import { setFilters, type FiltersInitialState } from '../../../redux/filters/filterSlice';
import type { RootState } from '../../../redux/store';

export type InputTypes = 'checkbox' | 'radio';

export interface FilterInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes;
  name: string;
  icon: string;
  text: string;
  className?: string;
  filterKey: keyof FiltersInitialState;
  value?: string;
}

export default function FilterInput({
  type,
  name,
  icon,
  text,
  className,
  filterKey,
  value,
  ...rest
}: FilterInputProps) {
  const dispatch = useAppDispatch();
  const filterValue = useSelector((state: RootState) => state.filters[filterKey]);

  const isChecked = value ? filterValue === value : filterValue === true;

  const handleClick = () => {
    if (value) {
      const newValue = isChecked ? '' : value;
      dispatch(setFilters({ [filterKey]: newValue }));
    } else {
      dispatch(setFilters({ [filterKey]: !isChecked }));
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
      />
      <svg className={s.checkboxIcon} width={32} height={32}>
        <use href={icon}></use>
      </svg>
      <p className={s.checkboxText}>{text}</p>
    </div>
  );
}
