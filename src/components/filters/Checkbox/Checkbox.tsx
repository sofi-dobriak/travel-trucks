import clsx from 'clsx';
import s from './Checkbox.module.css';
import { useAppDispatch } from '../../../redux/hooks';
import { useSelector } from 'react-redux';
import { setFilters, type FiltersInitialState } from '../../../redux/filters/filterSlice';
import type { RootState } from '../../../redux/store';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: string;
  text: string;
  className?: string;
  filterKey: keyof FiltersInitialState;
  value?: string;
}

export default function Checkbox({
  icon,
  text,
  className,
  filterKey,
  value,
  ...rest
}: CheckboxProps) {
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
        type='checkbox'
        name='checkbox'
        className='visually-hidden'
        checked={isChecked}
        onChange={handleClick}
        {...rest}
      />
      <svg className={s.checkboxIcon} width={32} height={32}>
        <use href={icon}></use>
      </svg>
      <p className={s.checkboxText}>{text}</p>
    </div>
  );
}
