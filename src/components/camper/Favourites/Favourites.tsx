import { Link } from 'react-router-dom';
import s from './Favourites.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavCampersByIdAndTitle } from '../../../redux/campers/campersSelector';
import { MdDeleteOutline } from 'react-icons/md';
import { removeFavouriteCamper } from '../../../redux/campers/campersSlice';

const Favourites = () => {
  const dispatch = useDispatch();
  const favCampers = useSelector(selectFavCampersByIdAndTitle);
  const haveFavCampers = favCampers.length > 0;

  const handleDeleteFavCamper = (id: string) => {
    if (!id) return;
    dispatch(removeFavouriteCamper(id));
  };

  return (
    <div className={s.favContainer}>
      {!haveFavCampers && <h2>No fav campers</h2>}
      {haveFavCampers && (
        <ul className={s.favCampersList}>
          {favCampers.map(({ id, name }) => (
            <li key={id} className={s.favCampersItem}>
              <Link to={`/campers/${id}`} className={s.favCampersLink}>
                {name}
              </Link>
              <button
                type='button'
                className={s.deleteLinkButton}
                onClick={() => handleDeleteFavCamper(id)}
              >
                <MdDeleteOutline className={s.deleteLinkIcon} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favourites;
