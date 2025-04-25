import { useEffect, useState, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import styles from './Layout.module.css';
import DroidAssistant from '../DroidAssistant.jsx/DroidAssistant';

function Layout() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    try {
      audioRef.current = new Audio('/sounds/starwars-theme.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;

      audioRef.current.addEventListener('error', (e) => {
        console.error('Помилка завантаження аудіо:', e);
        setAudioError('Failed to load the holosound');
      });
      audioRef.current.addEventListener('loadeddata', () => {
        console.log('Holosound loaded successfully');
      });
    } catch (err) {
      console.error('Помилка ініціалізації аудіо:', err);
      setAudioError('Error initializing holosound');
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) {
      console.error('Holosound not initialized');
      setAudioError('Holosound not initialized');
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .then(() => {
          console.log('Holosound playing');
        })
        .catch((error) => {
          console.error('Помилка відтворення аудіо:', error);
          setAudioError('Failed to play holosound');
        });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.holoDeck}>
      <AppBar />
      <div className={styles.audioControl}>
        <button onClick={toggleAudio} className={styles.audioButton}>
          {isPlaying ? '🔇 Disable Holosound' : '🔊 Activate Holosound'}
        </button>
        {audioError && <p className={styles.errorMessage}>{audioError}</p>}
      </div>
      <DroidAssistant />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
