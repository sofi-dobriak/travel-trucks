import Checkbox from '../common/Checkbox/Checkbox';
import s from './Filters.module.css';

const Filters = () => {
  return (
    <>
      <h2 className={s.filtersTitle}>Filters</h2>
      <h3 className={s.equipmentTitle}>Vehicle equipment</h3>
      <ul className={s.equipmentList}>
        <li>
          <Checkbox text='AC' icon='/images/icons.svg#icon-wind' id='ac' filterKey='AC' />
        </li>
        <li>
          <Checkbox
            text='Automatic'
            icon='/images/icons.svg#icon-diagram'
            id='transmission'
            filterKey='transmission'
            value='automatic'
          />
        </li>
        <li>
          <Checkbox
            text='Kitchen'
            icon='/images/icons.svg#icon-cup'
            id='kitchen'
            filterKey='kitchen'
          />
        </li>
        <li>
          <Checkbox text='TV' icon='/images/icons.svg#icon-tv' id='tv' filterKey='TV' />
        </li>
        <li>
          <Checkbox
            text='Bathroom'
            icon='/images/icons.svg#icon-shower'
            id='bathroom'
            filterKey='bathroom'
          />
        </li>
      </ul>

      <h3 className={s.typeTitle}>Vehicle type</h3>
      <ul className={s.typeList}>
        <li>
          <Checkbox
            text='Van'
            icon='/images/icons.svg#icon-grid-1x2'
            id='van'
            filterKey='form'
            value='van'
          />
        </li>
        <li>
          <Checkbox
            text='Fully Integrated'
            icon='/images/icons.svg#icon-grid-2x2'
            className={s.grid2x2}
            id='fullyIntegrated'
            filterKey='form'
            value='fullyIntegrated'
          />
        </li>
        <li>
          <Checkbox
            text='Alcove'
            icon='/images/icons.svg#icon-grid-3x3'
            id='alcove'
            filterKey='form'
            value='alcove'
          />
        </li>
      </ul>
    </>
  );
};

export default Filters;
