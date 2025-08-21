import { RATING } from '../../../../constants/constants';
import s from './RatingList.module.css';

interface RatingListProps {
  reviewer_rating: number;
}

const RatingList = ({ reviewer_rating }: RatingListProps) => {
  const reviewsMaxLengthRating = RATING.MAX_LIST_LENGTH;

  return (
    <ul className={s.reviewsRatingList}>
      {Array.from({ length: reviewsMaxLengthRating }, (_, startIndex) => (
        <li key={startIndex}>
          <svg
            width={16}
            height={16}
            className={startIndex < reviewer_rating ? s.fillStar : s.emptyStar}
          >
            <use href='/images/icons.svg#icon-star'></use>
          </svg>
        </li>
      ))}
    </ul>
  );
};

export default RatingList;
