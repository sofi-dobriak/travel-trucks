import { useSelector } from 'react-redux';
import { selectFeaturesList, selectOneCamper } from '../../../redux/campers/campersSelector';
import s from './FeaturesList.module.css';
import Label from '../../common/Label/Label';
import { getFeatIcons } from '../../../utils/getFeatIcons';
import sprite from '/images/icons.svg';
import type { FeatureItem } from '../../../types/features';

const FeaturesList = () => {
  const camper = useSelector(selectOneCamper);
  const featuresArray: FeatureItem[] = useSelector(selectFeaturesList);

  if (!camper || featuresArray.length === 0) return null;

  return (
    <ul className={s.featCamperList}>
      {featuresArray
        .filter(({ key, text }) => camper[key as keyof typeof camper] && text)
        .map(({ key, text, icon }) => (
          <li key={key}>
            <Label
              text={text}
              icon={`${sprite}${icon}`}
              className={getFeatIcons(key, s.featIcons)}
            />
          </li>
        ))}
    </ul>
  );
};

export default FeaturesList;
