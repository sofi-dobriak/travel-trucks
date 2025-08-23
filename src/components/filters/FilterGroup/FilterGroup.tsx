import type { FilterConfig } from '../../../config/filtersConfig';
import s from './FilterGroup.module.css';
import sprite from '/images/icons.svg';
import type { InputTypes } from '../FilterInput/FilterInput';
import FilterInput from '../FilterInput/FilterInput';
import type { Dispatch, SetStateAction } from 'react';
import type { FiltersInitialState } from '../../../redux/filters/filterSlice';

interface FilterGroupProps {
  type: InputTypes;
  name: string;
  title: string;
  filters: FilterConfig[];
  localFilters: FiltersInitialState;
  setLocalFilters: Dispatch<SetStateAction<FiltersInitialState>>;
}

const FilterGroup = ({
  title,
  filters,
  type,
  name,
  localFilters,
  setLocalFilters,
}: FilterGroupProps) => {
  return (
    <div>
      <h3 className={s.equipmentTypesTitle}>{title}</h3>
      <ul className={s.equipmentTypesList}>
        {filters.map(({ text, icon, id, filterKey, value }) => (
          <li key={id}>
            <FilterInput
              type={type}
              name={name}
              text={text}
              icon={`${sprite}${icon}`}
              filterKey={filterKey}
              value={value}
              localFilters={localFilters}
              setLocalFilters={setLocalFilters}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterGroup;
