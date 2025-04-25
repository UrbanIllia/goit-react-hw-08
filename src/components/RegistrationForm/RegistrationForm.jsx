import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import styles from './RegistrationForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  holocomm: Yup.string().email('Invalid Holocomm ID').required('Required'),
  accessCode: Yup.string()
    .min(6, 'Access code must be at least 6 characters')
    .required('Required'),
});

function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const credentials = {
      name: values.name,
      email: values.holocomm,
      password: values.accessCode,
    };
    dispatch(register(credentials));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', holocomm: '', accessCode: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.indicator}></div>
        <div className={styles.field}>
          <label htmlFor="name">Traveler Name</label>
          <Field name="name" type="text" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.field}>
          <label htmlFor="holocomm">Holocomm ID</label>
          <Field name="holocomm" type="email" className={styles.input} />
          <ErrorMessage
            name="holocomm"
            component="div"
            className={styles.error}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="accessCode">Access Code</label>
          <Field name="accessCode" type="password" className={styles.input} />
          <ErrorMessage
            name="accessCode"
            component="div"
            className={styles.error}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Register in the System
        </button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
