import { useEffect } from 'react';
import {
  selectCampers,
  selectError,
  selectIsLoading,
  selectPage,
  selectTotalItems,
  selectTotalPages,
} from '../../../redux/campers/campersSelector';
import s from './CamperList.module.css';
import Button from '../../common/Button/Button';
import { useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem';
import { getAllCampers } from '../../../redux/campers/campersOperations';
import { useAppDispatch } from '../../../redux/hooks';
import { resetCampers, setPage } from '../../../redux/campers/campersSlice';
import { selectAllFilters } from '../../../redux/filters/filterSelectors';
import Loader from '../../common/Loader/Loader';
import InfoMessage from '../../common/InfoMessage/InfoMessage';
import { IoMdOptions } from 'react-icons/io';
import type { FilterModalProps } from '../../filters/FilterModal/FilterModal';

const CamperList = ({ setModalIsOpen }: FilterModalProps) => {
  const dispatch = useAppDispatch();
  const campersList = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const totalItems = useSelector(selectTotalItems);
  const error = useSelector(selectError);
  const filters = useSelector(selectAllFilters);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(resetCampers());
    }
    dispatch(getAllCampers());
  }, [dispatch, currentPage, filters]);

  const hasMoreItems = campersList.length < totalItems;

  return (
    <div className={s.campersListContainer}>
      {isLoading && <Loader />}

      {!isLoading && (
        <Button className={s.filterButton} variant='secondary' onClick={() => setModalIsOpen(true)}>
          <IoMdOptions className={s.filterButtonIcon} />
          Filters
        </Button>
      )}

      {!isLoading && campersList.length === 0 && (
        <InfoMessage>Unfortunately, nothing was found for your request</InfoMessage>
      )}

      {!error && campersList.length > 0 && (
        <ul className={s.campersList}>
          {campersList.map(camper => (
            <li key={camper.id} className={s.camperItem}>
              <CamperItem {...camper} />
            </li>
          ))}
        </ul>
      )}

      {hasMoreItems && (
        <Button variant='secondary' className={s.campersLoadMoreButton} onClick={handleLoadMore}>
          {isLoading ? 'Loading...' : 'Load more'}
        </Button>
      )}
    </div>
  );
};

export default CamperList;
