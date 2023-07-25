import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './Room.module.scss';
import imgOne from '../../../assets/pictures/hotel_room.png';
import imgTwo from '../../../assets/pictures/hotel_room_bed.png';
import imgThree from '../../../assets/pictures/hotel_room_2.png';


const Room = (props) => {

  const roomOne = useRef(null);
  const roomTwo = useRef(null);
  const roomThree = useRef(null);

  useEffect(() => {

    const clickHandlerOne = () => {
      localStorage.setItem('roomName', 'De Luxe Room');
      localStorage.setItem('Price', 189);
    };

    const clickHandlerTwo = () => {
      localStorage.setItem('roomName', 'De Luxe Sea View');
      localStorage.setItem('Price', 209);
    };
    
    const clickHandlerThree = () => {
      localStorage.setItem('roomName', 'The Wellhall Family');
      localStorage.setItem('Price', 399);
    };

    roomOne.current.addEventListener('click', clickHandlerOne);
    roomTwo.current.addEventListener('click', clickHandlerTwo);
    roomThree.current.addEventListener('click', clickHandlerThree);
  }, [])
  

  return (
    <div className={style.roomWrapper}>
      <div className={style.container}>
        <img className={style.img} src={imgOne} alt='example hotel room' />
        <div className={style.roomInfo}>
          <span className={style.people}>2 adults | 1 child below 7</span>
          <span className={style.name}>{props.hotel.first.name}</span>
          <span className={style.price}>from ${props.hotel.first.price} a night</span>
          <Link className={style.a} to="/Best_hotel.de/reservation">
            <button ref={roomOne} className={style.button}>Book now</button>
          </Link>
        </div>
      </div>
      <div className={style.container}>
        <img className={style.img} src={imgTwo} alt='example hotel room' />
        <div className={style.roomInfo}>
          <span className={style.people}>2 adults | 1 child below 7</span>
          <span className={style.name}>{props.hotel.second.name}</span>
          <span className={style.price}>from ${props.hotel.second.price} a night</span>
          <Link className={style.a} to="/Best_hotel.de/reservation">
            <button ref={roomTwo} className={style.button}>Book now</button>
          </Link>
        </div>
      </div>
      <div className={style.container}>
        <img className={style.img} src={imgThree} alt='example hotel room' />
        <div className={style.roomInfo}>
          <span className={style.people}>2 adults | 1 child below 7</span>
          <span className={style.name}>{props.hotel.three.name}</span>
          <span className={style.price}>from ${props.hotel.three.price} a night</span>
          <Link className={style.a} to="/Best_hotel.de/reservation">
            <button ref={roomThree} className={style.button}>Book now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Room;
