import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.css';

function RegistrationPage() {
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Galactic Registration</h2>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;
