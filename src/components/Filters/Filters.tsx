import Checkbox from '../common/Checkbox/Checkbox';
import s from './Filters.module.css';

const Filters = () => {
  return (
    <>
      <h2 className={s.filtersTitle}>Filters</h2>
      <h3 className={s.equipmentTitle}>Vehicle equipment</h3>
      <ul className={s.equipmentList}>
        <li>
          <Checkbox text='AC' icon='/images/icons.svg#icon-wind' />
        </li>
        <li>
          <Checkbox text='Automatic' icon='/images/icons.svg#icon-diagram' />
        </li>
        <li>
          <Checkbox text='Kitchen' icon='/images/icons.svg#icon-cup' />
        </li>
        <li>
          <Checkbox text='TV' icon='/images/icons.svg#icon-tv' />
        </li>
        <li>
          <Checkbox text='Bathroom' icon='/images/icons.svg#icon-shower' />
        </li>
      </ul>

      <h3 className={s.typeTitle}>Vehicle type</h3>
      <ul className={s.typeList}>
        <li>
          <Checkbox text='Van' icon='/images/icons.svg#icon-grid-1x2' />
        </li>
        <li>
          <Checkbox
            text='Fully Integrated'
            icon='/images/icons.svg#icon-grid-2x2'
            className={s.grid2x2}
          />
        </li>
        <li>
          <Checkbox text='Alcove' icon='/images/icons.svg#icon-grid-3x3' />
        </li>
      </ul>
    </>
  );
};

export default Filters;
