import style from './PaymentsMethod.module.scss';
import card from '../../../assets/icons/credit-card.svg';
import blik from '../../../assets/icons/blik.svg';
import cash from '../../../assets/icons/cash.svg';
import { useContext, useEffect, useRef } from 'react';
import AdditionalContext from '../../../Context/adtional-context';

const PaymentsMethod = () => {

    const ctx = useContext(AdditionalContext);

    const cardPay = useRef(null);
    const blikPay = useRef(null);
    const cashPay = useRef(null);

    useEffect(() => {

        const cardClickHandler = () => {
            console.log('card');
            ctx.paymentsMethod = 'card';
        }

        cardPay.current.addEventListener('click', cardClickHandler);

        return(() => {
            cardPay.current.removeEventListener('click', cardClickHandler);
        });

    }, [cardPay]);

    useEffect(() => {

        const cardClickHandler = () => {
            console.log('blik');
            ctx.paymentsMethod = 'blik';
        }

        blikPay.current.addEventListener('click', cardClickHandler);

        return(() => {
            blikPay.current.removeEventListener('click', cardClickHandler);
        });

    }, [blikPay]);

    useEffect(() => {

        const cardClickHandler = () => {
            console.log('cash');
            ctx.paymentsMethod = 'cash';
        }

        cashPay.current.addEventListener('click', cardClickHandler);

        return(() => {
            cashPay.current.removeEventListener('click', cardClickHandler);
        });

    }, [cashPay]);

    return (
        <div className={style.container}>
            <div className={style.container__payments}>
                <div ref={cardPay} className={style.container__payments__card}>
                    <img src={card} alt='card method' className={style.container__payments__card__img} />
                    <span className={style.container__payments__content}>Credit Card</span>
                    <input type='radio' name='card' />
                </div>
                <div ref={blikPay} className={style.container__payments__blik}>
                    <img src={blik} alt='card method' className={style.container__payments__blik__img__blik} />
                    <span className={style.container__payments__content}>Blik</span>
                    <input type='radio' name='card' />
                </div>
                <div ref={cashPay} className={style.container__payments__cash}>
                    <img src={cash} alt='card method' className={style.container__payments__cash__img} />
                    <span id={style.spanLast} className={style.container__payments__content}>Cash in hotel</span>
                    <input type='radio' name='card' />
                </div>
            </div>
        </div>
    )
}

export default PaymentsMethod;