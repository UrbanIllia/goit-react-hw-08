import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
});

function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values)).then(() => {
      toast.success('Kin added to the registry!');
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.indicator}></div>
        <div className={styles.field}>
          <label htmlFor="name">Kin Name</label>
          <Field name="name" type="text" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.field}>
          <label htmlFor="number">Holocomm Number</label>
          <Field name="number" type="text" className={styles.input} />
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Add Kin to Registry
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
