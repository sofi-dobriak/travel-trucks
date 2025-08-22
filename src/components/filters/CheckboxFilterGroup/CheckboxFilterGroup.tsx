import type { FilterConfig } from '../../../config/filtersConfig';
import Checkbox from '../Checkbox/Checkbox';
import s from './CheckboxFilterGroup.module.css';
import sprite from '/images/icons.svg';

interface CheckboxFilterGroupProps {
  title: string;
  filters: FilterConfig[];
}

const CheckboxFilterGroup = ({ title, filters }: CheckboxFilterGroupProps) => {
  return (
    <div>
      <h3 className={s.equipmentTitle}>{title}</h3>
      <ul className={s.equipmentList}>
        {filters.map(({ text, icon, id, filterKey, value }) => (
          <li key={id}>
            <Checkbox text={text} icon={`${sprite}${icon}`} filterKey={filterKey} value={value} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckboxFilterGroup;
