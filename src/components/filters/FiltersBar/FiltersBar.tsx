import Location from '../Location/Location';
import Filters from '../Filters/Filters';
import Button from '../../common/Button/Button';
import s from './FiltersBar.module.css';
import { useAppDispatch } from '../../../redux/hooks';
import { getAllCampers } from '../../../redux/campers/campersOperations';
import { selectHasActiveFilters, selectLocation } from '../../../redux/filters/filterSelectors';
import { useSelector } from 'react-redux';
import { resetFilters, setFilters } from '../../../redux/filters/filterSlice';
import { useCallback, useEffect, useState } from 'react';
import { setPage } from '../../../redux/campers/campersSlice';

const FiltersBar = () => {
  const dispatch = useAppDispatch();
  const globalLocation = useSelector(selectLocation);
  const hasActiveFilters = useSelector(selectHasActiveFilters);
  const [localLocation, setLocalLocation] = useState(globalLocation);

  const handleSearchClick = useCallback(() => {
    dispatch(setPage(1));
    dispatch(resetFilters());

    if (!localLocation) return;

    if (localLocation) {
      dispatch(setFilters({ location: localLocation }));
    }

    dispatch(getAllCampers());
  }, [dispatch, localLocation]);

  const handleResetFilters = useCallback(() => {
    if (!hasActiveFilters && !localLocation) return;

    setLocalLocation('');
    dispatch(resetFilters());
    dispatch(getAllCampers());
    dispatch(setPage(1));
  }, [dispatch, hasActiveFilters, localLocation]);

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
      <Filters />
      <div className={s.filtersButtonContainer}>
        <Button onClick={handleSearchClick} disabled={!hasActiveFilters && !localLocation}>
          Search
        </Button>
        <Button onClick={handleResetFilters} disabled={!hasActiveFilters && !localLocation}>
          Reset filters
        </Button>
      </div>
    </aside>
  );
};

export default FiltersBar;
