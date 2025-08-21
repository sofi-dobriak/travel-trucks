import s from './CamperLabels.module.css';
import sprite from '/images/icons.svg';
import Label from '../../../common/Label/Label';
import type { Camper } from '../../../../types/camper';

const CamperLabels = (camper: Camper) => {
  if (!camper) return null;

  const firstFourLabels = [
    { key: 'transmission', text: camper?.transmission, icon: '#icon-diagram' },
    { key: 'engine', text: camper?.engine, icon: '#icon-petrol' },
    { key: 'AC', text: 'AC', icon: '#icon-wind' },
    { key: 'bathroom', text: 'bathroom', icon: '#icon-shower' },
  ];

  return (
    <ul className={s.camperLabelList}>
      {firstFourLabels.map(({ key, text, icon }) => (
        <li key={key}>
          <Label icon={`${sprite}${icon}`} text={text} />
        </li>
      ))}
    </ul>
  );
};

export default CamperLabels;
