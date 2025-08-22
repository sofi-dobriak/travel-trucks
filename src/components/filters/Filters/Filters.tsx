import { EQUIPMENT_FILTERS, TYPE_FILTERS } from '../../../config/filtersConfig';
import CheckboxFilterGroup from '../CheckboxFilterGroup/CheckboxFilterGroup';
import RadioFilterGroup from '../RadioFilterGroup/RadioFilterGroup';
import s from './Filters.module.css';

const Filters = () => {
  return (
    <>
      <h2 className={s.filtersTitle}>Filters</h2>
      <CheckboxFilterGroup title='Vehicle equipment' filters={EQUIPMENT_FILTERS} />
      <RadioFilterGroup title='Vehicle type' filters={TYPE_FILTERS} />
    </>
  );
};

export default Filters;
