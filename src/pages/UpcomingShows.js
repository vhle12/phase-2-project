import React, { useEffect, useState } from 'react';
import {
  Container,
  ShowCard,
  FormContainer,
  Form,
  Input,
  Button
} from "../styles/UpcomingShowsStyles"

const UpcomingShows = () => {
  const [shows, setShows] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    venue: '',
    date: '',
    location: '',
    ticketCost: ''
  });

  useEffect(() => {
    fetch('http://localhost:4000/shows')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error("Error fetching shows:", error));
  }, []);

  const handleAddShow = () => {
    setIsAdding(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/shows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setShows([...shows, data]);
        setFormData({ venue: '', date: '', location: '', ticketCost: '' });
        setIsAdding(false);
      })
      .catch(error => console.error('Error adding show:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/shows/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setShows(shows.filter(show => show.id !== id));
      })
      .catch(error => console.error('Error deleting show:', error));
  };

  return (
    <Container>
      <h2>UPCOMING SHOWS</h2>
      <Button onClick={handleAddShow}>Add Show</Button>
      {isAdding && (
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="venue"
              placeholder="Venue"
              value={formData.venue}
              onChange={handleChange}
            />
            <Input
              type="date"
              name="date"
              placeholder="Date"
              value={formData.date}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="ticketCost"
              placeholder="Ticket Cost"
              value={formData.ticketCost}
              onChange={handleChange}
            />
            <Button type="submit">Save Changes</Button>
          </Form>
        </FormContainer>
      )}
      {shows.map(show => (
        <ShowCard key={show.id}>
          <h3>{show.venue}</h3>
          <p>Date: {show.date}</p>
          <p>Location: {show.location}</p>
          <p>Ticket Cost: {show.ticketCost}</p>
          <Button onClick={() => handleDelete(show.id)}>Delete</Button>
        </ShowCard>
      ))}
    </Container>
  );
};

export default UpcomingShows;