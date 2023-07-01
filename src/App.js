import Accommodation from './components/Accommodation/Accommodation';
import Comment from './components/Comment/Comment';
import Discounts from './components/Discounts/Discounts';
import Footer from './components/Footer/Footer';
import HomeSite from './components/HomeSite/HomeSite';
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
    </div>
  )
}


export default App;