import { useState } from 'react';
import styles from './DroidAssistant.module.css';

function DroidAssistant() {
  const [message, setMessage] = useState('');
  const [soundIndex, setSoundIndex] = useState(0);
  const [audioInstance, setAudioInstance] = useState(null);

  const sounds = [
    '/sounds/droid-beep-1.mp3',
    '/sounds/droid-beep-2.mp3',
    '/sounds/droid-beep-3.mp3',
    '/sounds/droid-beep-4.mp3',
    '/sounds/droid-beep-5.mp3',
  ];

  const messages = [
    'Beep-boop! Register now, traveler!',
    'Whirr-beep! Welcome to Tatooine!',
    'Bloop-bloop! Log your kin now!',
    'Beep-whistle! Don’t delay, traveler!',
    'Boop-beep! Access the system now!',
  ];

  const handleClick = () => {
    if (audioInstance) {
      audioInstance.pause();
      audioInstance.currentTime = 0;
    }

    const audio = new Audio(sounds[soundIndex]);
    setAudioInstance(audio);
    audio.play().catch((error) => {
      console.error('Помилка відтворення звуку:', error);
    });

    setMessage(messages[soundIndex]);
    setTimeout(() => setMessage(''), 5000);

    setSoundIndex((prevIndex) => (prevIndex + 1) % sounds.length);
  };

  return (
    <div className={styles.droid}>
      <img
        src="/images/r2d2.png"
        alt="R2-D2 Droid"
        className={styles.droidImage}
        onClick={handleClick}
      />
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}

export default DroidAssistant;
