import { useSelector } from 'react-redux';
import s from './ReviewItem.module.css';
import type { CamperReview } from '../../../../types/camper';
import { selectOneCamper } from '../../../../redux/campers/campersSelector';
import RatingList from '../RatingList/RatingList';

const ReviewItem = ({ reviewer_name, reviewer_rating, comment }: CamperReview) => {
  const camper = useSelector(selectOneCamper);
  if (!camper) return null;

  return (
    <>
      <div className={s.avatarNameRatingContainer}>
        <p className={s.reviewAuthorLetter}>{reviewer_name.charAt(0).toUpperCase()}</p>

        <div className={s.reviewsNameRatingContainer}>
          <h3 className={s.reviewsName}>{reviewer_name}</h3>

          <RatingList reviewer_rating={reviewer_rating} />
        </div>
      </div>

      <p className={s.reviewsText}>{comment}</p>
    </>
  );
};

export default ReviewItem;
