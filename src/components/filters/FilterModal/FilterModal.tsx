import s from './FilterModal.module.css';
import Location from '../Location/Location';
import Filters from '../Filters/Filters';
import Button from '../../common/Button/Button';
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
import { IoCloseOutline } from 'react-icons/io5';
import clsx from 'clsx';

export interface FilterModalProps {
  modalIsOpen?: boolean;
  setModalIsOpen: (modalIsOpen: boolean) => void;
}

const FilterModal = ({ modalIsOpen, setModalIsOpen }: FilterModalProps) => {
  const dispatch = useAppDispatch();
  const globalLocation = useSelector(selectLocation);
  const hasActiveFilters = useSelector(selectHasActiveFilters);
  const globalFilters: FiltersInitialState = useSelector(selectAllFilters);
  const [localLocation, setLocalLocation] = useState(globalLocation);
  const [localFilters, setLocalFilters] = useState<FiltersInitialState>(globalFilters);

  const handleSearchClick = useCallback(() => {
    dispatch(setPage(1));
    dispatch(resetFilters());

    const filtersToApply = { ...localFilters };
    if (localLocation) {
      filtersToApply.location = localLocation;
    }

    if (Object.keys(filtersToApply).length > 0) {
      dispatch(setFilters(filtersToApply));
    }

    dispatch(getAllCampers());
    setModalIsOpen(false);
  }, [dispatch, localLocation, localFilters, setModalIsOpen]);

  const handleResetFilters = useCallback(() => {
    if (!hasActiveFilters && !localLocation) return;

    setLocalLocation('');
    dispatch(resetFilters());
    dispatch(getAllCampers());
    dispatch(setPage(1));
    setModalIsOpen(false);
  }, [dispatch, hasActiveFilters, localLocation, setModalIsOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSearchClick();
        setModalIsOpen(false);
      }

      if (e.key === 'Escape') {
        handleResetFilters();
        setModalIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSearchClick, handleResetFilters, setModalIsOpen]);

  return (
    <div className={clsx(s.modalBackdrop, modalIsOpen && s.visible)}>
      <div className={s.modalWindow}>
        <button className={s.closeFilterModalButton} onClick={() => setModalIsOpen(false)}>
          <IoCloseOutline className={s.closeFilterModalIcon} />
        </button>
        <div className={s.filterModalContent}>
          <Location value={localLocation} onLocationChange={setLocalLocation} />
          <Filters localFilters={localFilters} setLocalFilters={setLocalFilters} />
          <div className={s.filtersButtonContainer}>
            <Button onClick={handleSearchClick}>Search</Button>
            <Button onClick={handleResetFilters} variant='secondary'>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
