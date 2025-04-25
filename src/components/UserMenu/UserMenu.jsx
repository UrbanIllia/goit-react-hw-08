import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/selectors';
import { resetContacts } from '../../redux/contacts/slice';
import styles from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      dispatch(resetContacts());
    });
  };

  return (
    <div className={styles.userMenu}>
      <p className={styles.userName}>Greetings, {user.name}</p>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Depart Tatooine
      </button>
    </div>
  );
}

export default UserMenu;
