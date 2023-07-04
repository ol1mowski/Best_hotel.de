import Discount from './Discount/Discount';
import style from './Discounts.module.scss';
import bookOnline from '../../assets/pictures/booking_online.png';
import spa from '../../assets/pictures/spa.png';
import tourist from '../../assets/pictures/tourist_with_suitcase.png';

const Discounts = () => {

    const discount = [
        {
            id: 1,
            title: 'Early Bird Discount',
            more: 'List your offers, promos, or special membership privileges and perks here to entice people to book your property.',
            img: bookOnline,
        },
        {
            id: 2,
            title: 'Wellhall Members Club',
            more: 'List your offers, promos, or special membership privileges and perks here to entice people to book your property.',
            img: spa,
        },
        {
            id: 3,
            title: 'Book 3 Nights,Get 1 Night Free',
            more: 'List your offers, promos, or special membership privileges and perks here to entice people to book your property.',
            img: tourist,
        },

    ]

    return(
        <div className={style.container}>
            <h2 className={style.header}>Promos and Offers</h2>
            <div className={style.discountWrappper}>
                <Discount 
                title={discount[0].title}
                more={discount[0].more}
                img={discount[0].img}
                />
                <Discount 
                title={discount[1].title}
                more={discount[1].more}
                img={discount[1].img}
                />
                <Discount 
                title={discount[2].title}
                more={discount[2].more}
                img={discount[2].img}
                />
            </div>
        </div>
    )
}

export default Discounts;