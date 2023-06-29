import Discount from './Discount/Discount';
import style from './Discounts.module.scss';

const Discounts = () => {
    return(
        <div className={style.container}>
            <h2 className={style.header}>Promos and Offers</h2>
            <Discount />
        </div>
    )
}

export default Discounts;