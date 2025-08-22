import type { Camper } from '../../../../types/camper';
import s from './CamperRating.module.css';

const CamperRating = (camper: Camper) => {
  const reviewsLength = camper.reviews?.length || 0;

  return (
    <div className={s.camperRatingLocationContainer}>
      <div className={s.camperRatingContainer}>
        <svg width={16} height={16} className={s.camperStarIcon}>
          <use href='/images/icons.svg#icon-star'></use>
        </svg>
        <p className={s.reviewCountText}>
          {camper.rating}({reviewsLength} Reviews)
        </p>
      </div>

      <div className={s.camperLocationContainer}>
        <svg width={16} height={16} className={s.camperMapIcon}>
          <use href='/images/icons.svg#icon-map'></use>
        </svg>
        <p className={s.locationText}>{camper.location}</p>
      </div>
    </div>
  );
};

export default CamperRating;
