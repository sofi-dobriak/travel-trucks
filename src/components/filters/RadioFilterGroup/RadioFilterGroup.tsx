import type { FilterConfig } from '../../../config/filtersConfig';
import Radio from '../Radio/Radio';
import s from './RadioFilterGroup.module.css';
import sprite from '/images/icons.svg';

interface RadioFilterGroupProps {
  title: string;
  filters: FilterConfig[];
}

const RadioFilterGroup = ({ title, filters }: RadioFilterGroupProps) => {
  return (
    <div>
      <h3 className={s.typeTitle}>{title}</h3>
      <ul className={s.typeList}>
        {filters.map(({ text, icon, id, filterKey, value }) => (
          <li key={id} className={s.typeItem}>
            <Radio
              text={text}
              icon={`${sprite}${icon}`}
              filterKey={filterKey}
              value={value}
              className={id === 'fullyIntegrated' ? s.grid2x2 : ''}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioFilterGroup;
