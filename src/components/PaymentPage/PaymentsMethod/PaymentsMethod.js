import style from './PaymentsMethod.module.scss';
import card from '../../../assets/icons/credit-card.svg';
import blik from '../../../assets/icons/blik.svg';
import cash from '../../../assets/icons/cash.svg';

const PaymentsMethod = () => {
    return(
        <div className={style.container}>
            <div className={style.container__payments}>
                <div className={style.container__payments__card}>
                    <img src={card} alt='card method' className={style.container__payments__card__img} />
                    <span className={style.container__payments__content}>Credit Card</span>
                </div>
                <div className={style.container__payments__blik}>
                <img src={blik} alt='card method' className={style.container__payments__blik__img__blik} />
                <span className={style.container__payments__content}>Blik</span>
                </div>
                <div className={style.container__payments__cash}>
                <img src={cash} alt='card method' className={style.container__payments__cash__img} />
                <span className={style.container__payments__content}>Cash in hotel</span>
                </div>
            </div>
        </div>
    )
}

export default PaymentsMethod;