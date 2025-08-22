import { useField } from 'formik';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import s from './DateField.module.css';
import './CalendarOverrides.css';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

interface DateFieldProps {
  name: string;
  placeholder: string;
  className: string;
}

const DateField = ({ name, placeholder, className }: DateFieldProps) => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [field, , helpers] = useField(name);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        showCalendar
      ) {
        setShowCalendar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar, setShowCalendar]);

  const formattedDate = (date: Date | null) => {
    if (!date) return '';

    return date.toLocaleDateString('uk-UA', {
      day: '2-digit',
      month: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className={s.dataField} ref={containerRef}>
      <input
        type='text'
        name='date'
        value={formattedDate(field.value)}
        placeholder={placeholder}
        onClick={() => setShowCalendar(true)}
        readOnly
        className={className}
      />
      {showCalendar && (
        <Calendar
          value={field.value}
          onChange={date => {
            helpers.setValue(date);
            setShowCalendar(false);
          }}
          className={clsx('my-custom-calendar', s.calendar)}
          locale='en-US'
        />
      )}
    </div>
  );
};

export default DateField;
