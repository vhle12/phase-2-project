import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Home from './Home';
import CurrentMusic from './CurrentMusic';
import UpcomingShows from './UpcomingShows';
import Messages from './Messages';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

const Dashboard = () => {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="music" element={<CurrentMusic />} />
        <Route path="shows" element={<UpcomingShows />} />
        <Route path="messages" element={<Messages />} />
      </Routes>
    </Container>
  );
};

export default Dashboard;