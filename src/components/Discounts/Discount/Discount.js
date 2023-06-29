import style from './Discount.module.scss';
import bookOnline from '../../../assets/pictures/booking_online.png';
import spa from '../../../assets/pictures/spa.png';
import tourist from '../../../assets/pictures/tourist_with_suitcase.png';

const Discount = () => {
    return(
        <div className={style.container}>
            <div className={style.Wrapper}>
            <img className={style.img} src={bookOnline} alt='booking online photo' />
                <div className={style.contentWrapper}>
                    <span className={style.content}>
                    <h3 className={style.contentHeader}>Early Bird Discount </h3>
                    <span className={style.contentBelow}>List your offers, promos, or special membership privileges and perks here to entice people to book your property.</span> 
                    </span>
                </div>
            </div>
            <div className={style.Wrapper}>
            <img className={style.img} src={spa} alt='spa photo' />
                <div className={style.contentWrapper}>
                    <span className={style.content}>
                    <h3 className={style.contentHeader}>Wellhall Members Club</h3>
                    <span className={style.contentBelow}>List your offers, promos, or special membership privileges and perks here to entice people to book your property.</span> 
                    </span>
                </div>
            </div>
            <div className={style.Wrapper}>
            <img className={style.img} src={tourist} alt='spa photo' />
                <div className={style.contentWrapper}>
                    <span className={style.content}>
                    <h3 className={style.contentHeader}>Book 3 Nights,Get 1 Night Free</h3>
                    <span className={style.contentBelow}>List your offers, promos, or special membership privileges and perks here to entice people to book your property.</span> 
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Discount;