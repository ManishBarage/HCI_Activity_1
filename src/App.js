// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import MainScreen from './MainScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main-screen" element={<MainScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
