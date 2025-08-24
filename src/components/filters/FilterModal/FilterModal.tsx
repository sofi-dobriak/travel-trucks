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
  modalIsOpen: boolean;
  handleCloseModal: () => void;
}

const FilterModal = ({ modalIsOpen, handleCloseModal }: FilterModalProps) => {
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
    handleCloseModal();
  }, [dispatch, localLocation, localFilters, handleCloseModal]);

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
    handleCloseModal();
  }, [dispatch, hasActiveFilters, localLocation, setLocalFilters, handleCloseModal]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSearchClick();
        handleCloseModal();
      }

      if (e.key === 'Escape') {
        handleResetFilters();
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSearchClick, handleResetFilters, handleCloseModal]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className={clsx(s.modalBackdrop, modalIsOpen && s.visible)} onClick={handleBackdropClick}>
      <div className={s.modalWindow}>
        <button className={s.closeFilterModalButton} onClick={handleCloseModal}>
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
