import type { FilterConfig } from '../../../config/filtersConfig';
import s from './FilterGroup.module.css';
import sprite from '/images/icons.svg';
import type { InputTypes } from '../FilterInput/FilterInput';
import FilterInput from '../FilterInput/FilterInput';

interface FilterGroupProps {
  type: InputTypes;
  name: string;
  title: string;
  filters: FilterConfig[];
}

const FilterGroup = ({ title, filters, type, name }: FilterGroupProps) => {
  return (
    <div>
      <h3 className={s.equipmentTitle}>{title}</h3>
      <ul className={s.equipmentList}>
        {filters.map(({ text, icon, id, filterKey, value }) => (
          <li key={id}>
            <FilterInput
              type={type}
              name={name}
              text={text}
              icon={`${sprite}${icon}`}
              filterKey={filterKey}
              value={value}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterGroup;
