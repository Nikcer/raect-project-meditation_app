
import data from '../../data/SongData';
import AudioPlayer from 'react-audio-player';
import styles from './Song.module.css';

export default function Songs() {
  return (
    <div className={styles.playerContainer}>
      {data.map((song) => (
        <div key={song.id} className={styles.player}>
          <p>{song.title}</p>
          <img alt='song-cover' src={song.img} />
          <AudioPlayer controls src={song.audio}
            className={styles.audioPlayer}
            
            />
        </div>
      ))}
    </div>
  );
}
