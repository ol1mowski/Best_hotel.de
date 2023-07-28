import React, { useContext, useEffect, useState } from 'react';
import style from './Summary.module.scss';
import AddtionalContext from '../../../Context/adtional-context';
import bin from '../../../assets/icons/bin.png';

const Summary = () => {
  const ctx = useContext(AddtionalContext);
  const [price, setPrice] = useState(0);
  const [foodPrice, setFoodPrice] = useState(0);
  const [transportPrice, setTransportPrice] = useState(0); // New state for the current transport price

  const roomPrice = +localStorage.getItem('FinalyPrice');

  useEffect(() => {
    // Calculate the new price based on context values
    const newPrice = roomPrice + ctx.food + ctx.transport;
    setPrice(newPrice);
  }, [ctx.food, ctx.transport]);

  useEffect(() => {
    // Update the food price state whenever ctx.food changes
    setFoodPrice(ctx.food);
  }, [ctx.food]);

  useEffect(() => {
    // Update the transport price state whenever ctx.transport changes
    setTransportPrice(ctx.transport);
  }, [ctx.transport]);

  // Function to toggle the food item between 0 and the actual price
  const toggleFood = () => {
    setFoodPrice(foodPrice === 0 ? ctx.food : 0);
  };

  // Function to toggle the transport item between 0 and the actual price
  const toggleTransport = () => {
    setTransportPrice(transportPrice === 0 ? ctx.transport : 0);
  };

  return (
    <div className={style.container}>
      <h2>Summary</h2>
      <div className={style.container__finalyPrice}>
        <ul className={style.container__finalyPrice__ul}>
          <li className={style.container__finalyPrice__ul__li}>Hotel Room: $ {roomPrice}</li>
          {foodPrice !== 0 && (
            <li className={style.container__finalyPrice__ul__li}>
              Food package $ {foodPrice} <img src={bin} alt='bin' className={style.container__finalyPrice__ul__remove} onClick={toggleFood} />
            </li>
          )}
          {transportPrice !== 0 && (
            <li className={style.container__finalyPrice__ul__li}>
              Transport $ {transportPrice} <img src={bin} alt='bin' className={style.container__finalyPrice__ul__remove} onClick={toggleTransport} />
            </li>
          )}
        </ul>
        <h2>$ {price}</h2>
        <button className={style.container__finalyPrice__button}>Pay now</button>
      </div>
    </div>
  );
};

export default Summary;
