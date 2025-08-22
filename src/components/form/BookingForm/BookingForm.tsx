import { Field, Form, Formik, type FormikHelpers } from 'formik';
import DateField from '../DateField/DateField';
import Button from '../../common/Button/Button';
import s from './BookingForm.module.css';

interface InitialFormValues {
  name: string;
  email: string;
  date: string;
  comment: string;
}

const initialValues: InitialFormValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

const BookingForm = () => {
  const handleSubmit = (values: InitialFormValues, actions: FormikHelpers<InitialFormValues>) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={s.formContainer}>
      <h2 className={s.formTitle}>Book your campervan now</h2>
      <p className={s.formDescription}>Stay connected! We are always ready to help you.</p>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className={s.formInputContainer}>
            <Field type='text' id='name' name='name' placeholder='Name*' className={s.formInput} />
          </div>
          <div className={s.formInputContainer}>
            <Field
              type='email'
              id='email'
              name='email'
              placeholder='Email*'
              className={s.formInput}
            />
          </div>
          <div className={s.formInputContainer}>
            <DateField name='date' placeholder='Booking date*' className={s.formInput} />
          </div>
          <div className={s.formInputContainer}>
            <Field
              as='textarea'
              id='comment'
              name='comment'
              placeholder='Comment'
              className={s.formTextarea}
            />
          </div>
          <Button type='submit' className={s.formButtonSend}>
            Send
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
