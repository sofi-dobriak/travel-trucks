import Location from '../Location/Location';
import Filters from '../Filters/Filters';
import Button from '../../common/Button/Button';
import s from './FiltersBar.module.css';
import { useAppDispatch } from '../../../redux/hooks';
import { getAllCampers } from '../../../redux/campers/campersOperations';
import {
  selectAllFilters,
  selectHasActiveFilters,
  selectLocation,
} from '../../../redux/filters/filterSelectors';
import { useSelector } from 'react-redux';
import {
  resetFilters,
  setFilters,
  type FiltersInitialState,
} from '../../../redux/filters/filterSlice';
import { useCallback, useEffect, useState } from 'react';
import { setPage } from '../../../redux/campers/campersSlice';

const FiltersBar = () => {
  const dispatch = useAppDispatch();
  const globalLocation = useSelector(selectLocation);
  const hasActiveFilters = useSelector(selectHasActiveFilters);
  const globalFilters: FiltersInitialState = useSelector(selectAllFilters);
  const [localLocation, setLocalLocation] = useState(globalLocation);
  const [localFilters, setLocalFilters] = useState<FiltersInitialState>(globalFilters);

  const handleSearchClick = useCallback(() => {
    dispatch(resetFilters());
    dispatch(setPage(1));

    const filtersToApply = { ...localFilters };
    if (localLocation) {
      filtersToApply.location = localLocation;
    }

    dispatch(setFilters(filtersToApply));
    dispatch(getAllCampers());
  }, [dispatch, localLocation, localFilters]);

  const handleResetFilters = useCallback(() => {
    if (!hasActiveFilters && !localLocation) return;

    setLocalLocation('');
    setLocalFilters({
      location: '',
      form: '',
      transmission: '',
      AC: false,
      bathroom: false,
      kitchen: false,
      TV: false,
    });

    dispatch(resetFilters());
    dispatch(getAllCampers());
    dispatch(setPage(1));
  }, [dispatch, hasActiveFilters, localLocation, setLocalFilters]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSearchClick();
      }

      if (e.key === 'Escape') {
        handleResetFilters();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSearchClick, handleResetFilters]);

  return (
    <aside className={s.filterBar}>
      <Location value={localLocation} onLocationChange={setLocalLocation} />
      <Filters localFilters={localFilters} setLocalFilters={setLocalFilters} />
      <div className={s.filtersButtonContainer}>
        <Button onClick={handleSearchClick}>Search</Button>
        <Button onClick={handleResetFilters} variant='secondary'>
          Reset filters
        </Button>
      </div>
    </aside>
  );
};

export default FiltersBar;
