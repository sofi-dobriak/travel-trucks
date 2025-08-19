import { useEffect } from 'react';
import { selectCampers } from '../../redux/campers/campersSelector';
import s from './CamperList.module.css';
import Button from '../common/Button/Button';
import { useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem';
import { getAllCampers } from '../../redux/campers/campersOperations';
import { selectAllFilters } from '../../redux/filters/filterSelectors';
import { useAppDispatch } from '../../redux/hooks';

const CamperList = () => {
  const dispatch = useAppDispatch();
  const campersList = useSelector(selectCampers);
  const filters = useSelector(selectAllFilters);

  useEffect(() => {
    dispatch(getAllCampers());
  }, [dispatch, filters]);

  return (
    <div>
      <ul className={s.campersList}>
        {campersList.map(camper => (
          <li key={camper.id} className={s.camperItem}>
            <CamperItem {...camper} />
          </li>
        ))}
      </ul>
      <Button variant='secondary' className={s.campersLoadMoreButton}>
        Load more
      </Button>
    </div>
  );
};

export default CamperList;
