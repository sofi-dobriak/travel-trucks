import s from './DetailInfo.module.css';
import type { Camper } from '../../../types/camper';

const DetailInfo = (props: Camper) => {
  const reviewsLength = props.reviews?.length || 0;
  const formattedPrice = props.price.toFixed(2);

  return (
    <div>
      <h2 className={s.camperTitle}>{props.name}</h2>

      <div className={s.camperRatingLocationContainer}>
        <div className={s.camperRatingContainer}>
          <svg width={16} height={16} className={s.camperStarIcon}>
            <use href='/images/icons.svg#icon-star'></use>
          </svg>
          <p className={s.reviewCountText}>
            {props.rating}({reviewsLength} Reviews)
          </p>
        </div>

        <div className={s.camperLocationContainer}>
          <svg width={16} height={16} className={s.camperMapIcon}>
            <use href='/images/icons.svg#icon-map'></use>
          </svg>
          <p className={s.locationText}>{props.location}</p>
        </div>
      </div>

      <p className={s.camperPrice}>{formattedPrice}</p>

      <ul className={s.camperImagesList}>
        {props.gallery?.length > 0 &&
          props.gallery.map((image, index) => (
            <li key={index}>
              <img
                src={image.original}
                alt={`${props.name} camper - photo ${index + 1} of ${props.gallery.length}`}
                className={s.camperImage}
              />
            </li>
          ))}
      </ul>

      <p className={s.camperDescription}>{props.description}</p>
    </div>
  );
};

export default DetailInfo;
