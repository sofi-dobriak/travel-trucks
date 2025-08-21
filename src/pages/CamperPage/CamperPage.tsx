import { NavLink, Outlet, useParams } from 'react-router-dom';
import s from './CamperPage.module.css';
import Container from '../../components/common/Container/Container';
import DetailInfo from '../../components/camper/DetailInfo/DetailInfo';
import { useAppDispatch } from '../../redux/hooks';
import { useEffect } from 'react';
import { getCamperById } from '../../redux/campers/campersOperations';
import { selectError, selectIsLoading, selectOneCamper } from '../../redux/campers/campersSelector';
import { useSelector } from 'react-redux';
const CamperPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const camper = useSelector(selectOneCamper);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!id) return;

    dispatch(getCamperById(id));
  }, [dispatch, id]);

  return (
    <div className={s.camperPage}>
      <Container>
        {isLoading && <h2>Loading...</h2>}
        {!isLoading && error && <h2>Ooops... Something went wrong. Please, try again</h2>}

        {!isLoading && !error && camper && (
          <>
            <DetailInfo {...camper} />
            <nav>
              <NavLink to='features'>Features</NavLink>
              <NavLink to='reviews'>reviews</NavLink>
            </nav>
            <Outlet />
          </>
        )}
      </Container>
    </div>
  );
};

export default CamperPage;
