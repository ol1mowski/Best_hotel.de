import React, { useContext, useEffect, useRef, useState } from 'react';
import style from './Summary.module.scss';
import AddtionalContext from '../../../Context/adtional-context';
import bin from '../../../assets/icons/bin.png';

const Summary = () => {
  const ctx = useContext(AddtionalContext);
  const [price, setPrice] = useState(0);
  const [foodPrice, setFoodPrice] = useState(0);
  const [transportPrice, setTransportPrice] = useState(0);
  const pay = useRef(null);

  const roomPrice = +localStorage.getItem('FinalyPrice');

  // Function to toggle the food item between 0 and the actual price
  const toggleFood = () => {
    setFoodPrice((prevFoodPrice) => (prevFoodPrice === 0 ? ctx.food : 0));
  };

  // Function to toggle the transport item between 0 and the actual price
  const toggleTransport = () => {
    setTransportPrice((prevTransportPrice) => (prevTransportPrice === 0 ? ctx.transport : 0));
  };

  useEffect(() => {
    // Calculate the new price based on context values
    const newPrice = roomPrice + foodPrice + transportPrice;
    setPrice(newPrice);
  }, [roomPrice, foodPrice, transportPrice]);

  useEffect(() => {
    // Update the food price state whenever ctx.food changes
    setFoodPrice(ctx.food);
  }, [ctx.food]);

  useEffect(() => {
    // Update the transport price state whenever ctx.transport changes
    setTransportPrice(ctx.transport);
  }, [ctx.transport]);

  useEffect(() => {
    const payHandler = () => {
      alert('Paying...');
    };

    pay.current.addEventListener('click', payHandler);

    return () => {
      pay.current.removeEventListener('click', payHandler);
    };
  }, [pay]);

  return (
    <div className={style.container}>
      <h2>Summary</h2>
      <div className={style.container__finalyPrice}>
        <ul className={style.container__finalyPrice__ul}>
          <li className={style.container__finalyPrice__ul__li}>Hotel Room: $ {roomPrice}</li>
          {foodPrice !== 0 && (
            <li className={style.container__finalyPrice__ul__li}>
              Food package $ {foodPrice}{' '}
              <img src={bin} alt='bin' className={style.container__finalyPrice__ul__remove} onClick={toggleFood} />
            </li>
          )}
          {transportPrice !== 0 && (
            <li className={style.container__finalyPrice__ul__li}>
              Transport $ {transportPrice}{' '}
              <img src={bin} alt='bin' className={style.container__finalyPrice__ul__remove} onClick={toggleTransport} />
            </li>
          )}
        </ul>
        <h2>$ {price}</h2>
        <button ref={pay} className={style.container__finalyPrice__button}>
          Pay now
        </button>
      </div>
    </div>
  );
};

export default Summary;
