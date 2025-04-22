import styles from './App.module.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import starWarsVideo from './assets/125.mp4';

function App() {
  return (
    <div className={styles.appContainer}>
      <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
        <source src={starWarsVideo} type="video/mp4" />
        Ваш браузер не підтримує відео.
      </video>

      <h1 className={styles.title}>Галактичний реєстр зв’язку</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
