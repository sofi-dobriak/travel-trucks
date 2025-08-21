import { useSelector } from 'react-redux';
import s from './Features.module.css';
import { selectOneCamper } from '../../../redux/campers/campersSelector';
import Label from '../../common/Label/Label';
import sprite from '/images/icons.svg';

interface FeatureItem {
  key: string;
  text: string;
  icon: string;
}

const Features = () => {
  const camper = useSelector(selectOneCamper);
  if (!camper) return;

  const getFeatIcons = (key: string) => {
    return ['microwave', 'gas', 'water'].includes(key) ? s.featIcons : '';
  };

  const featuresArray: FeatureItem[] = [
    { key: 'transmission', text: camper?.transmission, icon: '#icon-diagram' },
    { key: 'engine', text: camper?.engine, icon: '#icon-petrol' },
    { key: 'AC', text: 'AC', icon: '#icon-wind' },
    { key: 'bathroom', text: 'Bathroom', icon: '#icon-shower' },
    { key: 'kitchen', text: 'Kitchen', icon: '#icon-cup' },
    { key: 'TV', text: 'TV', icon: '#icon-tv' },
    { key: 'radio', text: 'Radio', icon: '#icon-radio' },
    { key: 'refrigerator', text: 'Refrigerator', icon: '#icon-fridge' },
    { key: 'microwave', text: 'Microwave', icon: '#icon-microwave' },
    { key: 'gas', text: 'Gas', icon: '#icon-gas-stove' },
    { key: 'water', text: 'Water', icon: '#icon-water-drop' },
  ];

  return (
    <div className={s.featuresContainer}>
      <ul className={s.featCamperList}>
        {featuresArray
          .filter(({ key, text }) => camper[key as keyof typeof camper] && text)
          .map(({ key, text, icon }) => (
            <li key={key}>
              <Label text={text} icon={`${sprite}${icon}`} className={getFeatIcons(key)} />
            </li>
          ))}
      </ul>

      <h3 className={s.featSubTitle}>Vehicle details</h3>
    </div>
  );
};

export default Features;
