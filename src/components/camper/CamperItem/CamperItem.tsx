import { Link } from 'react-router-dom';
import type { Camper } from '../../../types/camper';
import Label from '../../common/Label/Label';
import s from './CamperItem.module.css';
import clsx from 'clsx';
import { useAppDispatch } from '../../../redux/hooks';
import { addFavouriteCamper, removeFavouriteCamper } from '../../../redux/campers/campersSlice';
import { useSelector } from 'react-redux';
import { selectFavouritesCampers } from '../../../redux/campers/campersSelector';

const CamperItem = (props: Camper) => {
  const dispatch = useAppDispatch();
  const reviewsLength = props.reviews?.length || 0;
  const formattedPrice = props.price.toFixed(2);

  const favouritesCampers = useSelector(selectFavouritesCampers);
  const isFavourite = favouritesCampers.some(camper => camper.id === props.id);

  const handleToggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavouriteCamper(props.id));
    } else {
      dispatch(addFavouriteCamper(props));
    }
  };

  return (
    <div className={s.camperContainer}>
      <img src={props.gallery[0].thumb} alt='A camper image' className={s.camperImage} />

      <div className={s.camperTextContainer}>
        <div className={s.camperTitlePriceContainer}>
          <h3 className={s.camperTitle}>{props.name}</h3>

          <div className={s.camperPriceLikeContainer}>
            <p className={s.camperPrice}>{formattedPrice}</p>
            <button className={s.camperLikeButton} onClick={handleToggleFavourite}>
              <svg
                width={26}
                height={24}
                className={clsx(s.camperLikeIcon, isFavourite && s.favourite)}
              >
                <use href='/images/icons.svg#icon-heart'></use>
              </svg>
            </button>
          </div>
        </div>

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

        <p className={s.camperDescriptionText}>{props.description}</p>

        <ul className={s.camperLabelList}>
          <li>
            <Label icon='/images/icons.svg#icon-diagram' text={props.transmission} />
          </li>
          <li>
            <Label icon='/images/icons.svg#icon-petrol' text={props.engine} />
          </li>
          {props.AC && (
            <li>
              <Label icon='/images/icons.svg#icon-wind' text='AC' />
            </li>
          )}
          {props.kitchen && (
            <li>
              <Label icon='/images/icons.svg#icon-cup' text='kitchen' />
            </li>
          )}
        </ul>

        <Link to={`/campers/${props.id}`} className={s.camperShowMoreButton}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperItem;
