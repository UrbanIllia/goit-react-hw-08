import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import starWarsVideo from './assets/125.mp4';
import { selectLoading, selectError } from './redux/contactsSlice';
import { fetchContacts } from './redux/contactsOps';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/sounds/starwars-theme.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.1;

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.log('Помилка відтворення аудіо:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.holoDeck}>
      <video autoPlay loop muted playsInline className={styles.holoScreen}>
        <source src={starWarsVideo} type="video/mp4" />
        Ваш браузер не підтримує відео.
      </video>

      <div className={styles.header}>
        <h1 className={styles.holoTitle}>Галактичний реєстр зв’язку</h1>
        <button onClick={toggleAudio} className={styles.audioButton}>
          {isPlaying ? 'Вимкнути музику' : 'Увімкнути музику'}
        </button>
      </div>
      {loading && <p className={styles.statusMessage}>Завантаження...</p>}
      {error && <p className={styles.statusMessage}>Помилка: {error}</p>}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
