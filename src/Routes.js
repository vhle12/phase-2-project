import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import CurrentMusic from './pages/CurrentMusic';
import UpcomingShows from './pages/UpcomingShows';
import Messages from './pages/Messages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/dashboard/*" element={<Dashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="music" element={<CurrentMusic />} />
        <Route path="shows" element={<UpcomingShows />} />
        <Route path="messages" element={<Messages />} />
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;


