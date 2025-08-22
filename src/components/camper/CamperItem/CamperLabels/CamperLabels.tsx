import s from './CamperLabels.module.css';
import sprite from '/images/icons.svg';
import Label from '../../../common/Label/Label';
import type { Camper } from '../../../../types/camper';

const CamperLabels = (camper: Camper) => {
  if (!camper) return null;

  const allPossibleLabels = [
    { key: 'transmission' as keyof Camper, text: camper.transmission, icon: '#icon-diagram' },
    { key: 'engine' as keyof Camper, text: camper.engine, icon: '#icon-petrol' },
    { key: 'AC' as keyof Camper, text: 'AC', icon: '#icon-wind' },
    { key: 'kitchen' as keyof Camper, text: 'Kitchen', icon: '#icon-cup' },
  ];

  const availableLabels = allPossibleLabels.filter(label => {
    const value = camper[label.key];
    return typeof value === 'boolean' ? value : Boolean(value);
  });

  return (
    <ul className={s.camperLabelList}>
      {availableLabels.map(({ key, text, icon }) => (
        <li key={key}>
          <Label icon={`${sprite}${icon}`} text={text} />
        </li>
      ))}
    </ul>
  );
};

export default CamperLabels;
