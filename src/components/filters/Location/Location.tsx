import TextInput from '../../common/TextInput/TextInput';
import s from './Location.module.css';

interface LocationProps {
  value: string;
  onLocationChange: (value: string) => void;
}

const Location = ({ value, onLocationChange }: LocationProps) => {
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onLocationChange(e.target.value);
  };

  return (
    <div className={s.locationContainer}>
      <h2 className={s.locationTitle}>Location</h2>
      <TextInput
        inputName='location'
        placeholder='City'
        containerClassName={s.locationContainer}
        inputClassName={s.locationInput}
        value={value}
        onChange={handleLocationChange}
      >
        <svg width={20} height={20} className={s.locationIcon}>
          <use href='/images/icons.svg#icon-map'></use>
        </svg>
      </TextInput>
    </div>
  );
};

export default Location;
