import { Link } from 'react-router-dom';
import type { Camper } from '../../types/camper';
import Label from '../common/Label/Label';
import s from './CamperItem.module.css';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const CamperItem = ({
  name,
  price,
  rating,
  location,
  description,
  transmission,
  engine,
  reviews,
  gallery,
  AC,
  kitchen,
  id,
}: Camper) => {
  const reviewsLength = reviews.length;

  const getSavedFavourites = (): string[] => {
    const saved = localStorage.getItem('favourite');
    return saved ? JSON.parse(saved) : [];
  };

  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  useEffect(() => {
    const favourites = getSavedFavourites();
    setIsFavourite(favourites.includes(id));
  }, [id]);

  const handleAddToFavourite = () => {
    const favourites = getSavedFavourites();

    let updated: string[];

    if (isFavourite) {
      updated = favourites.filter(favId => favId !== id);
    } else {
      updated = [...favourites, id];
    }

    localStorage.setItem('favourite', JSON.stringify(updated));
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={s.camperContainer}>
      <img src={gallery[0].thumb} alt='A camper image' className={s.camperImage} />

      <div className={s.camperTextContainer}>
        <div className={s.camperTitlePriceContainer}>
          <h3 className={s.camperTitle}>{name}</h3>

          <div className={s.camperPriceLikeContainer}>
            <p className={s.camperPrice}>{price.toFixed(2)}</p>
            <button className={s.camperLikeButton} onClick={handleAddToFavourite}>
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
              {rating}({reviewsLength} Reviews)
            </p>
          </div>

          <div className={s.camperLocationContainer}>
            <svg width={16} height={16} className={s.camperMapIcon}>
              <use href='/images/icons.svg#icon-map'></use>
            </svg>
            <p className={s.locationText}>{location}</p>
          </div>
        </div>

        <p className={s.camperDescriptionText}>{description}</p>

        <ul className={s.camperLabelList}>
          <li>
            <Label icon='/images/icons.svg#icon-diagram' text={transmission} />
          </li>
          <li>
            <Label icon='/images/icons.svg#icon-petrol' text={engine} />
          </li>
          {AC && (
            <li>
              <Label icon='/images/icons.svg#icon-wind' text='AC' />
            </li>
          )}
          {kitchen && (
            <li>
              <Label icon='/images/icons.svg#icon-cup' text='kitchen' />
            </li>
          )}
        </ul>

        <Link to={`/campers/${id}`} className={s.camperShowMoreButton}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperItem;
