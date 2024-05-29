import React, { useEffect, useState } from 'react';
import {
  Container,
  Header,
  ProfilePic,
  BandInfo,
  BandName,
  BandGenres,
  Section,
  SectionTitle,
  EditButtonSection,
  BandMember
} from '../styles/HomeStyles';

const Home = () => {
  const [band, setBand] = useState(null);
  const [musicians, setMusicians] = useState([]);
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [newBio, setNewBio] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/bands/1')
      .then(response => response.json())
      .then(data => {
        setBand(data);
        setNewBio(data.bio);
      })
      .catch(error => console.error("Error fetching band:", error));

    fetch('http://localhost:4000/musicians')
      .then(response => response.json())
      .then(data => setMusicians(data))
      .catch(error => console.error("Error fetching musicians:", error));
  }, []);

  const handleEdit = (section) => {
    if (section === 'About') {
      setIsEditingBio(true);
    }
  };

  const handleSaveChanges = () => {
    fetch('http://localhost:4000/bands/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ bio: newBio })
    })
      .then(response => response.json())
      .then(data => {
        setBand(data);
        setIsEditingBio(false);
      })
      .catch(error => console.error('Error updating bio:', error));
  };

  if (!band) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Header>
        <ProfilePic src={band.profilePic} alt="Band Profile" />
        <BandInfo>
          <BandName>{band.name}</BandName>
          <BandGenres>Genres: {band.genres.join(', ')}</BandGenres>
        </BandInfo>
      </Header>
      <Section>
        <SectionTitle>About the Band</SectionTitle>
        <EditButtonSection onClick={() => handleEdit('About')}>Edit</EditButtonSection>
        {isEditingBio ? (
          <div>
            <textarea value={newBio} onChange={(e) => setNewBio(e.target.value)} />
            <button onClick={handleSaveChanges}> Save Changes </button>
          </div>
        ) : (
          <p>{band.bio}</p>
        )}
      </Section>
      <Section>
        <SectionTitle>Band Members</SectionTitle>
        <EditButtonSection onClick={() => handleEdit('Band Members')}>Edit</EditButtonSection>
        {musicians.map(musician => (
          <BandMember key={musician.id}>
            {musician.name} - {musician.instruments.join(', ')}
          </BandMember>
        ))}
      </Section>
    </Container>
  );
};

export default Home;