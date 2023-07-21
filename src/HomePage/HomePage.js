import Accommodation from '../components/Accommodation/Accommodation';
import Comment from '../components/Comment/Comment';
import Discounts from '../components/Discounts/Discounts';
import Footer from '../components/Footer/Footer';
import HomeSite from '../components/HomeSite/HomeSite';
// import ReservationSite from './components/ReservationSite/ReservationSite';
import TheFamilySuit from '../components/TheFamilySuit/TheFamilySuit';
import WelcomeToHotel from '../components/WelcomeToHotel/WelcomeToHotel';

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

const HomePage = () => {
    return (
        <>
            <HomeSite />
            <WelcomeToHotel />
            <Accommodation hotel={hotelInfo} />
            <TheFamilySuit />
            <Discounts />
            <Comment />
            <Footer />
        </>
    )
}
export default HomePage;