import React, { useContext, useEffect, useRef, useState } from 'react';
import style from './Addtions.module.scss';
import airport from '../../../assets/pictures/airport.jpg';
import food from '../../../assets/pictures/food.jpg';
import AddtionalContext from '../../../Context/adtional-context';

const Addtions = () => {
  const ctx = useContext(AddtionalContext);

  const airportTrans = useRef(null);
  const time = useRef(null);
  const time2 = useRef(null);
  const breakfast = useRef(null);
  const breakfastD = useRef(null);
  const all = useRef(null);
  const foodButton = useRef(null);
  const oneWayTo = useRef(null);
  const wayFrom = useRef(null);
  const hideWayToButton = useRef(null);
  const hideWayFromButton = useRef(null);
  const [foodfinalPrice, setfoodFinalPrice] = useState(0);
  const [transportFinalPrice, setTransportFinalPrice] = useState(0);

  const price = {
    b: 100,
    bd: 150,
    a: 300,
  };

  useEffect(() => {
    const hideOneWayFrom = () => {
      oneWayTo.current.style.display = 'none';
      oneWayTo.current.ref = null;
      wayFrom.current.style.marginBottom = '2vh';
    };
    const hideOneWayTo = () => {
      wayFrom.current.style.display = 'none';
      wayFrom.current.ref = null;
      oneWayTo.current.style.marginBottom = '2vh';
    };

    hideWayToButton.current.addEventListener('click', hideOneWayFrom);
    hideWayFromButton.current.addEventListener('click', hideOneWayTo);

    return () => {
      hideWayToButton.current.removeEventListener('click', hideOneWayFrom);
      hideWayFromButton.current.removeEventListener('click', hideOneWayTo);
    };
  }, []);

  useEffect(() => {
    const airTransClickHandler = () => {
      const ToValue = time2.current.value;
      const FromValue = time.current.value;

      if (ToValue && FromValue) {
        setTransportFinalPrice(50);
      } else if (ToValue || FromValue) {
        setTransportFinalPrice(30);
      }
    };

    airportTrans.current.addEventListener('click', airTransClickHandler);

    return () => {
      airportTrans.current.removeEventListener('click', airTransClickHandler);
    };
  }, [time, time2]);

  useEffect(() => {
    const foodCheckHandler = () => {
      if (breakfast.current.checked) {
        setfoodFinalPrice(price.b);
      } else if (breakfastD.current.checked) {
        setfoodFinalPrice(price.bd);
      } else if (all.current.checked) {
        setfoodFinalPrice(price.a);
      }
    };

    foodButton.current.addEventListener('click', foodCheckHandler);

    return () => {
      foodButton.current.removeEventListener('click', foodCheckHandler);
    };
  }, [foodButton, price]);

  useEffect(() => {
    // Aktualizuj dane w kontekście po każdej zmianie
    ctx.setFood(foodfinalPrice);
    ctx.setTransport(transportFinalPrice);
  }, [foodfinalPrice, transportFinalPrice, ctx]);

  return (
    <div className={style.container}>
      <div className={style.container__optionalAddition}>
        <div className={style.container__optionalAddition__header}>
          <img className={style.container__optionalAddition__img} src={airport} alt='airport' />
          <span className={style.container__optionalAddition__content}>Transfer from Airport</span>
        </div>
        <button ref={hideWayToButton} className={style.container__optionalAddition__oneWay}>
          One way From
        </button>
        <button ref={hideWayFromButton} className={style.container__optionalAddition__oneWay}>
          One way To
        </button>
        <div className={style.container__optionalAddition__box}>
          <form>
            <div ref={wayFrom} className={style.container__optionalAddition__time}>
              <label htmlFor='time'>(From) Pick up time: </label>
              <input ref={time} type='time' id='time' className={style.customInput} />
            </div>
            <div ref={oneWayTo} className={style.container__optionalAddition__time}>
              <label htmlFor='time'>(To) Pick up time: </label>
              <input ref={time2} type='time' id='time' className={style.customInput} />
            </div>
          </form>
          <button ref={airportTrans} className={style.container__optionalAddition__box__button}>
            Add
          </button>
        </div>
      </div>
      <div className={style.container__optionalAddition}>
        <div className={style.container__optionalAddition__header}>
          <img className={style.container__optionalAddition__img} src={food} alt='airport' />
          <span className={style.container__optionalAddition__content}>Food type</span>
        </div>

        <div className={style.container__optionalAddition__second}>
          <form className={style.container__optionalAddition__second__form}>
            <div className={style.container__optionalAddition__breakfast}>
              <div className={style.container__optionalAddition__breakfast__inp}>
                <label htmlFor='breakfast'>Breakfast </label>
                <input ref={breakfast} type='radio' name='food' id='breakfast' className={style.customInput} />
              </div>
              <div className={style.container__optionalAddition__breakfast__inp}>
                <label htmlFor='breakfastD'>Breakfast and Dinner </label>
                <input ref={breakfastD} type='radio' name='food' id='breakfastD' className={style.customInput} />
              </div>
              <div className={style.container__optionalAddition__breakfast__inp}>
                <label htmlFor='breakfastAll'>All inclusive </label>
                <input ref={all} type='radio' id='breakfast' name='food' className={style.customInput} />
              </div>
            </div>
          </form>
          <button ref={foodButton} className={style.container__optionalAddition__box__button__breakfast}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addtions;
