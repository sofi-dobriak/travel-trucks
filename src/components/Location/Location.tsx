import TextInput from '../common/TextInput/TextInput';
import s from './Location.module.css';

const Location = () => {
  return (
    <div className={s.locationContainer}>
      <h2 className={s.locationTitle}>Location</h2>
      <TextInput
        inputName='location'
        placeholder='City'
        containerClassName={s.locationContainer}
        inputClassName={s.locationInput}
      >
        <svg width={20} height={20} className={s.locationIcon}>
          <use href='/images/icons.svg#icon-map'></use>
        </svg>
      </TextInput>
    </div>
  );
};

export default Location;
