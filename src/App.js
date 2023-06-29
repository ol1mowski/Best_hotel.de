<<<<<<< HEAD
import Accommodation from './components/Accommodation/Accommodation';
import Comment from './components/Comment/Comment';
import Discounts from './components/Discounts/Discounts';
import Footer from './components/Footer/Footer';
import HomeSite from './components/HomeSite/HomeSite';
import TheFamilySuit from './components/TheFamilySuit/TheFamilySuit';
import WelcomeToHotel from './components/WelcomeToHotel/WelcomeToHotel';


const app = {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(240, 230, 210, 0.8)',
}

const hotelInfo = {
  first: {
    name: 'De Luxe Room',
    price: 'from $189 a night',
  },
  second: {
    name: 'De Luxe Sea View',
    price: 'from $209 a night',
  },
  three: {
    name: 'The Wellhall Family Suite',
    price: 'from $399 a night',
  }
}

function App() {

return (
    <div style={app}>
      <HomeSite /> 
      <WelcomeToHotel />
      <Accommodation hotel={hotelInfo}/>
      <TheFamilySuit />
      <Discounts />
      <Comment />
      <Footer />
=======
import React from 'react';
import './App.css';

function App() {
return (
    <div className="App">
      Hello World
>>>>>>> 76e589124605ea92be3f1dbc1be1d798b2139fbb
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 76e589124605ea92be3f1dbc1be1d798b2139fbb
