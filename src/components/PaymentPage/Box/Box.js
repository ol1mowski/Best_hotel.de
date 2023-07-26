import React, { useRef } from 'react';
import style from './Box.module.scss';
import arrowDown from '../../../assets/icons/arrow-down.svg';

const Box = ({ name, number, click, isActive }) => {
  const arrow = useRef(null);

  return (
    <div
      className={`${style.container} ${isActive ? style.active : ''}`}
    >
      <div className={style.container__data}>
        <h2>
          {number}. {name}
        </h2>
        <img
          ref={arrow}
          src={arrowDown}
          alt="arrow Down"
          className={style.container__data__image}
          onClick={click}
        />
      </div>
    </div>
  );
};

export default Box;
