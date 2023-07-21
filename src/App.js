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
          <Route path="/Best_hotel.de/home" element={<HomePage />} />
          <Route path="/reservation" element={<ReservationSite />} />
          {/* Default route for the homepage */}
          <Route path="/Best_hotel.de" element={<HomeRedirect />} />
        </Routes>
      </Router>
    </div>
  );
};

const HomeRedirect = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/Best_hotel.de/home');
  }, [navigate]);

  return null; // You can return any loading indicator here if needed
};

export default App;
