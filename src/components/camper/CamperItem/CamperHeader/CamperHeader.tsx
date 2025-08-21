import clsx from 'clsx';
import s from './CamperHeader.module.css';

interface CamperHeaderProps {
  name: string;
  price: number;
  isFavourite: boolean;
  handleToggleFavourite: () => void;
}

const CamperHeader = ({ name, price, isFavourite, handleToggleFavourite }: CamperHeaderProps) => {
  const formattedPrice = price.toFixed(2);

  return (
    <div className={s.camperTitlePriceContainer}>
      <h3 className={s.camperTitle}>{name}</h3>

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
  );
};

export default CamperHeader;
