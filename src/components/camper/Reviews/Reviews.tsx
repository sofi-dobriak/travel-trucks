import { useSelector } from 'react-redux';
import s from './Reviews.module.css';
import { selectOneCamper } from '../../../redux/campers/campersSelector';
import ReviewItem from './ReviewItem/ReviewItem';
const Reviews = () => {
  const camper = useSelector(selectOneCamper);
  if (!camper) return null;

  return (
    <ul className={s.reviewsList} id='reviews'>
      {camper.reviews.map((review, index) => (
        <li key={index} className={s.reviewsItem}>
          <ReviewItem {...review} />
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
