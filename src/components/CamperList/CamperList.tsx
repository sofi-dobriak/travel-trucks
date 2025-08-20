import { useEffect } from 'react';
import {
  selectCampers,
  selectError,
  selectIsLoading,
  selectPage,
  selectTotalItems,
  selectTotalPages,
} from '../../redux/campers/campersSelector';
import s from './CamperList.module.css';
import Button from '../common/Button/Button';
import { useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem';
import { getAllCampers } from '../../redux/campers/campersOperations';
import { useAppDispatch } from '../../redux/hooks';
import { resetCampers, setPage } from '../../redux/campers/campersSlice';
import { selectAllFilters } from '../../redux/filters/filterSelectors';

const CamperList = () => {
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
    dispatch(setPage(1));

    if (currentPage === 1) {
      dispatch(resetCampers());
    }
    dispatch(getAllCampers());
  }, [dispatch, currentPage, filters]);

  const hasMoreItems = campersList.length < totalItems;

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}

      {!isLoading && campersList.length === 0 && (
        <h2>Unfortunately, nothing was found for your request</h2>
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
