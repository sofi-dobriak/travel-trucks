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
import { setPage } from '../../redux/campers/campersSlice';

const CamperList = () => {
  const dispatch = useAppDispatch();
  const campersList = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const totalItems = useSelector(selectTotalItems);
  const error = useSelector(selectError);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch, currentPage]);

  const hasMoreItems = campersList.length < totalItems;

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}

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
