import { EQUIPMENT_FILTERS, TYPE_FILTERS } from '../../../config/filtersConfig';
import FilterGroup from '../FilterGroup/FilterGroup';
import s from './Filters.module.css';

const Filters = () => {
  return (
    <>
      <h2 className={s.filtersTitle}>Filters</h2>
      <FilterGroup
        title='Vehicle equipment'
        filters={EQUIPMENT_FILTERS}
        type='checkbox'
        name='checkbox'
      />
      <FilterGroup title='Vehicle type' filters={TYPE_FILTERS} type='radio' name='radio' />
    </>
  );
};

export default Filters;
