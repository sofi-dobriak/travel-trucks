import type { Dispatch, SetStateAction } from 'react';
import { EQUIPMENT_FILTERS, TYPE_FILTERS } from '../../../config/filtersConfig';
import FilterGroup from '../FilterGroup/FilterGroup';
import s from './Filters.module.css';
import type { FiltersInitialState } from '../../../redux/filters/filterSlice';

interface FiltersProps {
  localFilters: FiltersInitialState;
  setLocalFilters: Dispatch<SetStateAction<FiltersInitialState>>;
}

const Filters = ({ localFilters, setLocalFilters }: FiltersProps) => {
  return (
    <>
      <h2 className={s.filtersTitle}>Filters</h2>
      <FilterGroup
        title='Vehicle equipment'
        filters={EQUIPMENT_FILTERS}
        type='checkbox'
        name='checkbox'
        localFilters={localFilters}
        setLocalFilters={setLocalFilters}
      />
      <FilterGroup
        title='Vehicle type'
        filters={TYPE_FILTERS}
        type='radio'
        name='radio'
        localFilters={localFilters}
        setLocalFilters={setLocalFilters}
      />
    </>
  );
};

export default Filters;
