import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Section,
  LeftSection,
  RightSection,
  Button,
  Input,
  Form
} from '../styles/WelcomePageStyles'

const WelcomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'parkinglotparty' && password === 'password') {
      navigate('/dashboard/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container>
      <LeftSection>
        <h1>New User?</h1>
        <p>Select account type:</p>
        <Button>User</Button>
        <Button>Musician</Button>
        <Button>Band</Button>
        <Button>Venue</Button>
      </LeftSection>
      <RightSection>
        <h1>Welcome to GigHub</h1>
        <Form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </Form>
      </RightSection>
    </Container>
  );
};

export default WelcomePage;