import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ReservationSite from './components/ReservationSite/ReservationSite';

const app = {
  width: '100vw',
  height: '100%',
  backgroundColor: '#f4f1ed',
};

const App = () => {
  return (
    <div style={app}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservation" element={<ReservationSite />} />
          {/* Default route for the homepage */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
