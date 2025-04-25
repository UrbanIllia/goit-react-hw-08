import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Access Tatooine System</h2>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
