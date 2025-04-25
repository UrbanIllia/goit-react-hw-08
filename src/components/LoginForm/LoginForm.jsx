import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

const validationSchema = Yup.object({
  holocomm: Yup.string().email('Invalid Holocomm ID').required('Required'),
  accessCode: Yup.string()
    .min(6, 'Access code must be at least 6 characters')
    .required('Required'),
});

function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const credentials = {
      email: values.holocomm,
      password: values.accessCode,
    };
    dispatch(login(credentials));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ holocomm: '', accessCode: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.indicator}></div> {/* Додаємо індикатор */}
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
          Access System
        </button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
