import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/selectors';
import { resetContacts } from '../../redux/contacts/slice';
import styles from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = async () => {
    console.log('Logout button clicked');
    try {
      await dispatch(logout()).unwrap();
      console.log('Logout successful');
      dispatch(resetContacts());
    } catch (error) {
      console.error('Logout failed:', error);
      dispatch(resetContacts());
    }
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
