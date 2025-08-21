import { useSelector } from 'react-redux';
import s from './VehicleList.module.css';
import { selectOneCamper, selectVehiclesPropList } from '../../../../redux/campers/campersSelector';
import type { VehicleDetailsItem } from '../../../../types/features';

const VehicleList = () => {
  const camper = useSelector(selectOneCamper);
  const vehicleDetails: VehicleDetailsItem[] = useSelector(selectVehiclesPropList);

  if (!camper || vehicleDetails.length === 0) return null;

  return (
    <div className={s.vehicleDetailsTitleValueContainer}>
      <ul className={s.vehicleDetailsTitleList}>
        {vehicleDetails.map(({ key, title }) => (
          <li key={key} className={s.vehicleDetailsTitleItem}>
            <p>{title}</p>
          </li>
        ))}
      </ul>

      <ul className={s.vehicleDetailsValuesList}>
        {vehicleDetails.map(({ key, value }) => (
          <li key={key} className={s.vehicleDetailsValueItem}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleList;
