import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import styles from './AppBar.module.css';

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <div className={styles.indicator}></div>{' '}
      {/* Додаємо мерехтливий індикатор */}
    </header>
  );
}

export default AppBar;
