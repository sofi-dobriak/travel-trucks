import { useSelector } from 'react-redux';
import TextInput from '../../common/TextInput/TextInput';
import s from './Location.module.css';
import { selectAllCities } from '../../../redux/campers/campersSelector';
import { useState } from 'react';

interface LocationProps {
  value: string;
  onLocationChange: (value: string) => void;
}

const Location = ({ value, onLocationChange }: LocationProps) => {
  const cities = useSelector(selectAllCities);
  const filterCities = cities.filter(city => city.toLowerCase().includes(value.toLowerCase()));
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onLocationChange(e.target.value);
  };

  const handleCitySelect = (city: string) => {
    onLocationChange(city);
    setIsDropdownOpen(false);
  };

  const handleInputFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => setIsDropdownOpen(false), 150);
  };

  return (
    <div className={s.locationContainer}>
      <h2 className={s.locationTitle}>Location</h2>
      <div className={s.locationInputWrapper}>
        <TextInput
          inputName='location'
          placeholder='City'
          containerClassName={s.locationContainer}
          inputClassName={s.locationInput}
          value={value}
          onChange={handleLocationChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        >
          <svg width={20} height={20} className={s.locationIcon}>
            <use href='/images/icons.svg#icon-map'></use>
          </svg>
        </TextInput>

        {isDropdownOpen && (
          <ul className={s.citiesDropdown}>
            {filterCities.map((city, index) => (
              <li key={index} onClick={() => handleCitySelect(city)} className={s.cityItem}>
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Location;
