import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ReservationSite from './components/ReservationSite/ReservationSite';
import PaymentPage from './components/PaymentPage/PaymentPage';
import MainContext from './Context/MainContext';

const app = {
  width: '100vw',
  height: '100%',
  backgroundColor: '#f4f1ed',
};



const App = () => {
  const [guests, setGuests] = useState(0);
  const [roomPrice, setRoomPrice] = useState(0);

  const getGuests = (guests) => {
    // Aktualizujemy zarówno stan lokalny jak i kontekst
    setGuests(guests);
  };

  const getPrice = (price) => {
    // Aktualizujemy zarówno stan lokalny jak i kontekst
    setRoomPrice(price);
  };

  return (
    <MainContext.Provider
      value={{
        amountOfguests: guests,
        finalyRoomPrice: roomPrice,
      }}
    >
      <div style={app}>
        <Router>
          <Routes>
            <Route path="/Best_hotel.de" element={<PaymentPage />} />
            {/* Przekazujemy updateGuests i updatePrice do ReservationSite */}
            <Route
              path="/Best_hotel.de/reservation"
              element={<ReservationSite price={getPrice} guests={getGuests} />}
            />
            <Route path="/Best_hotel.de/payment" element={<PaymentPage />} />
            {/* Default route for the homepage */}
          </Routes>
        </Router>
      </div>
    </MainContext.Provider>
  );
};

export default App;
