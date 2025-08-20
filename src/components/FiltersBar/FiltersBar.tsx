import Location from '../Location/Location';
import Filters from '../Filters/Filters';
import Button from '../common/Button/Button';
import s from './FiltersBar.module.css';
import { useAppDispatch } from '../../redux/hooks';
import { getAllCampers } from '../../redux/campers/campersOperations';
import { selectLocation } from '../../redux/filters/filterSelectors';
import { useSelector } from 'react-redux';
import { resetFilters, setFilters } from '../../redux/filters/filterSlice';
import { useState } from 'react';

const FiltersBar = () => {
  const dispatch = useAppDispatch();
  const globalLocation = useSelector(selectLocation);
  const [localLocation, setLocalLocation] = useState(globalLocation);

  const handleSearchClick = () => {
    if (!localLocation) return;

    if (localLocation) {
      dispatch(setFilters({ location: localLocation }));
    }

    dispatch(getAllCampers());
    setLocalLocation('');
  };

  const handleResetFilters = () => {
    setLocalLocation('');
    dispatch(resetFilters());
    dispatch(getAllCampers());
  };

  const handleKeyDow = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }

    if (e.key === 'Escape') {
      handleResetFilters();
    }
  };

  return (
    <aside onKeyDown={handleKeyDow}>
      <Location value={localLocation} onLocationChange={setLocalLocation} />
      <Filters />
      <div className={s.filtersButtonContainer}>
        <Button onClick={handleSearchClick}>Search</Button>
        <Button onClick={handleResetFilters}>Reset filters</Button>
      </div>
    </aside>
  );
};

export default FiltersBar;
