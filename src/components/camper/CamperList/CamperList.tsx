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
import { IoMdOptions } from 'react-icons/io';
import EmptyBlock from '../../common/EmptyBlock/EmptyBlock';

export interface CampersListProps {
  handleOpenModal: () => void;
}

const CamperList = ({ handleOpenModal }: CampersListProps) => {
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
    dispatch(resetCampers());
    dispatch(setPage(1));
  }, [dispatch, filters]);

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch, currentPage, filters]);

  const hasMoreItems = campersList.length < totalItems;

  return (
    <div className={s.campersListContainer}>
      {isLoading && <Loader />}

      {!isLoading && (
        <Button className={s.filterButton} variant='secondary' onClick={handleOpenModal}>
          <IoMdOptions className={s.filterButtonIcon} />
          Filters
        </Button>
      )}

      {!isLoading && campersList.length === 0 && (
        <EmptyBlock>Unfortunately, nothing was found for your request</EmptyBlock>
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
