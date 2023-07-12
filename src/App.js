import Accommodation from './components/Accommodation/Accommodation';
import Comment from './components/Comment/Comment';
import Discounts from './components/Discounts/Discounts';
import Footer from './components/Footer/Footer';
import HomeSite from './components/HomeSite/HomeSite';
// import ReservationSite from './components/ReservationSite/ReservationSite';
import TheFamilySuit from './components/TheFamilySuit/TheFamilySuit';
import WelcomeToHotel from './components/WelcomeToHotel/WelcomeToHotel';

const app = {
    width: '100vw',
    height: '100%',
    backgroundColor: '#f4f1ed',
}

const hotelInfo = {
  first: {
    name: 'De Luxe Room',
    price: 189,
  },
  second: {
    name: 'De Luxe Sea View',
    price: 209,
  },
  three: {
    name: 'The Wellhall Family',
    price: 399,
  }
}



const App = () => {
  return(
    <div style={app}>
    <HomeSite /> 
    <WelcomeToHotel />
    <Accommodation hotel={hotelInfo}/>
    <TheFamilySuit />
    <Discounts />
    <Comment />
    <Footer />
    {/* <ReservationSite
      header={hotelInfo.first.name} 
      price={hotelInfo.first.price}
    /> */}
    </div>
  )
}


export default App;