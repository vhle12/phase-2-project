import React, { useEffect, useState } from 'react';
import {
  PageContainer,
  SongContainer,
  Image,
  MediaPlayer
} from "../styles/CurrentMusicStyles"

const CurrentMusic = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/music')
      .then(response => response.json())
      .then(data => setMusic(data))
      .catch(error => console.error('Error fetching music:', error));
  }, []);

  return (
    <PageContainer>
      {music.length === 0 ? (
        <p>Loading...</p>
      ) : (
        music.map(track => (
          <SongContainer key={track.id}>
            <Image src={track.image} alt={track.title} />
            <h3>{track.title}</h3>
            <MediaPlayer controls>
              <source src={track.url} type="audio/mpeg" />
              Your browser does not support the audio element.
            </MediaPlayer>
          </SongContainer>
        ))
      )}
    </PageContainer>
  );
};

export default CurrentMusic;