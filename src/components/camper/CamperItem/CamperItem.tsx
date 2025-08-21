import { Link } from 'react-router-dom';
import type { Camper } from '../../../types/camper';
import s from './CamperItem.module.css';
import { useFavouriteCampers } from '../../../hooks/useFavouritesCampers';
import CamperHeader from './CamperHeader/CamperHeader';
import CamperLabels from './CamperLabels/CamperLabels';
import CamperRating from './CamperRating/CamperRating';

const CamperItem = (camper: Camper) => {
  const { isFavourite, handleToggleFavourite } = useFavouriteCampers(camper.id, camper);

  return (
    <div className={s.camperContainer}>
      <img src={camper.gallery[0].thumb} alt='A camper image' className={s.camperImage} />

      <div className={s.camperTextContainer}>
        <CamperHeader
          name={camper.name}
          price={camper.price}
          isFavourite={isFavourite}
          handleToggleFavourite={handleToggleFavourite}
        />

        <CamperRating {...camper} />

        <p className={s.camperDescriptionText}>{camper.description}</p>

        <CamperLabels {...camper} />

        <Link to={`/campers/${camper.id}`} className={s.camperShowMoreButton}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperItem;
