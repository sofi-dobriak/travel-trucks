import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import s from './CamperPage.module.css';
import Container from '../../components/common/Container/Container';
import DetailInfo from '../../components/camper/DetailInfo/DetailInfo';
import { useAppDispatch } from '../../redux/hooks';
import { useEffect } from 'react';
import { getCamperById } from '../../redux/campers/campersOperations';
import { selectError, selectIsLoading, selectOneCamper } from '../../redux/campers/campersSelector';
import { useSelector } from 'react-redux';
import { addActiveClass } from '../../utils/addActiveClass';
import BookingForm from '../../components/form/BookingForm/BookingForm';
import { IoIosArrowBack } from 'react-icons/io';

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
            <Link to='/campers' className={s.goBackIconLinkContainer}>
              <IoIosArrowBack className={s.goBackIcon} />
              <span className={s.goBackText}>Go back</span>
            </Link>
            <DetailInfo {...camper} />
            <nav className={s.camperNav}>
              <NavLink to='features' className={addActiveClass(s.camperLink, s.active)}>
                Features
              </NavLink>
              <NavLink to='reviews' className={addActiveClass(s.camperLink, s.active)}>
                Reviews
              </NavLink>
              <NavLink to='favourites' className={addActiveClass(s.camperLink, s.active)}>
                Favourites
              </NavLink>
            </nav>
            <div className={s.featFormContainer}>
              <Outlet />
              <BookingForm />
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default CamperPage;
