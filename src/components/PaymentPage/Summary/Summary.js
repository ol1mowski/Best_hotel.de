import React, { useContext, useEffect } from 'react';
import style from './Summary.module.scss';

const Summary = () => {

  const price = localStorage.getItem('FinalyPrice');

  // useEffect do nasłuchiwania zmian w kontekście


  return (
    <div className={style.container}>
      <h2>Summary</h2>
      <div className={style.container__finalyPrice}>
        <ul className={style.container__finalyPrice__ul}>
          <li>Hotel Room: $ {price}</li>
        </ul>
        <h2>$ {price}</h2>
        <button className={style.container__finalyPrice__button}>Pay now</button>
      </div>
    </div>
  );
};

export default Summary;
