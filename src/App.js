import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ReservationSite from './components/ReservationSite/ReservationSite';
import PaymentPage from './components/PaymentPage/PaymentPage';
import MainContext from './Context/MainContext';
import AdditionalContext from './Context/adtional-context'; // Poprawiona nazwa importu

const app = {
  width: '100vw',
  height: '100%',
  backgroundColor: '#f4f1ed',
};

const App = () => {
  const [guests, setGuests] = useState(0);
  const [roomPrice, setRoomPrice] = useState(0);
  const [food, setFood] = useState(0); // Dodane
  const [transport, setTransport] = useState(0); // Dodane

  const getGuests = (guests) => {
    setGuests(guests);
  };

  const getPrice = (price) => {
    setRoomPrice(price);
  };

  return (
    <AdditionalContext.Provider value={{ food, setFood, transport, setTransport }}> {/* Używamy kontekstu AdditionalContext */}
      <MainContext.Provider
        value={{
          amountOfguests: guests,
          finalyRoomPrice: roomPrice,
        }}
      >
        <div style={app}>
          <Router>
            <Routes>
              <Route path="/Best_hotel.de" element={<ReservationSite />} />
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
    </AdditionalContext.Provider>
  );
};

export default App;
