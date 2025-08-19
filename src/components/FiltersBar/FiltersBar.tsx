import Location from '../Location/Location';
import Filters from '../Filters/Filters';
import Button from '../common/Button/Button';
import s from './FiltersBar.module.css';

const FiltersBar = () => {
  return (
    <aside>
      <Location />
      <Filters />
      <Button className={s.buttonSearch}>Search</Button>
    </aside>
  );
};

export default FiltersBar;
