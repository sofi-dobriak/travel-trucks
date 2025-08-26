import s from './Features.module.css';
import FeaturesList from './FeaturesList/FeaturesList';
import VehicleList from './VehicleList/VehicleList';

const Features = () => {
  return (
    <div className={s.featuresContainer} id='features'>
      <FeaturesList />
      <h3 className={s.featSubTitle}>Vehicle details</h3>
      <VehicleList />
    </div>
  );
};

export default Features;
