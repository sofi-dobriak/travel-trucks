import { useSelector } from 'react-redux';
import { setFilters, type FiltersInitialState } from '../../../redux/filters/filterSlice';
import { useAppDispatch } from '../../../redux/hooks';
import type { RootState } from '../../../redux/store';
import s from './Radio.module.css';
import clsx from 'clsx';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: string;
  text: string;
  className?: string;
  filterKey: keyof FiltersInitialState;
  value?: string;
}

const Radio = ({ icon, text, className, filterKey, value, ...rest }: RadioProps) => {
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
    <div className={clsx(s.radioContainer, className)} onClick={handleClick}>
      <input
        type='radio'
        id={rest.id}
        name='radioType'
        className='visually-hidden'
        checked={isChecked}
        {...rest}
      />
      <svg className={s.radioIcon} width={32} height={32}>
        <use href={icon}></use>
      </svg>
      <p className={s.radioText}>{text}</p>
    </div>
  );
};

export default Radio;
