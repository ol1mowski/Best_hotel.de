import React, { useRef, useEffect, useState } from 'react';
import style from './Page.module.scss';
import arrowLeft from '../../../assets/icons/arrow-left.svg';
import arrowRight from '../../../assets/icons/arrow-right.svg';
import roomOne from '../../../assets/pictures/hotel_room.png';
import roomTwo from '../../../assets/pictures/hotel_room_bed.png';
import roomThree from '../../../assets/pictures/hotel_room_2.png';
import kitchen from '../../../assets/pictures/kitchen.png';
import bathroom from '../../../assets/pictures/bathroom.png';
import { Link } from 'react-router-dom';

const Page = (props) => {
  // Minimal date in the calender
  const minDate = new Date().toISOString().split('T')[0];
  //slider elements
  const arrowLeftRef = useRef(null);
  const arrowRightRef = useRef(null);
  const imgRef = useRef(null);
  //check price elements
  const button = useRef(null);
  const priceInfo = useRef(null);
  const checkIn = useRef(null);
  const checkOut = useRef(null);
  const amountOfGuests = useRef(null);
  const priceInp = useRef(null);
  const payButton = useRef(null);


  let room;
  let images = [];
  const header = localStorage.getItem('roomName');
  //slider images
  if (header === 'De Luxe Room') {
    room = roomOne;
  } else if (header === 'De Luxe Sea View') {
    room = roomTwo;
  } else if (header === 'The Wellhall Family') {
    room = roomThree;
  }

  images = [room, kitchen, bathroom];

  let currentImageIndex = 0;
  let isValidate = false;

  //button string
  const [isCalculating, setIsCalculating] = useState(false);


  const [selectedCheckInDate, setSelectedCheckInDate] = useState(null);


  //form validation
  const validateCheckIn = () => {
    const date = new Date(checkIn.current.value);
    if (isNaN(date)) {
      checkIn.current.style.border = '2px solid red';
      isValidate = false;
      checkIn.current.nextElementSibling.textContent = 'Invalid check-in date';
    } else {
      checkIn.current.style.border = '';
      setSelectedCheckInDate(date);
      isValidate = true;
      checkIn.current.nextElementSibling.textContent = '';
    }
  };

  const validateCheckOut = () => {
    const date = new Date(checkOut.current.value);
    if (isNaN(date)) {
      checkOut.current.style.border = '2px solid red';
      isValidate = false;
      checkOut.current.nextElementSibling.textContent = 'Invalid check-out date';
    } else {
      checkOut.current.style.border = '';
      isValidate = true;
      checkOut.current.nextElementSibling.textContent = '';
    }
  };

  const validateAmountOfGuests = () => {
    if (amountOfGuests.current.value === '') {
      amountOfGuests.current.style.border = '2px solid red';
      isValidate = false;
      amountOfGuests.current.nextElementSibling.textContent = 'Number of guests is required';
    } else {
      amountOfGuests.current.style.border = '';
      isValidate = true;
      amountOfGuests.current.nextElementSibling.textContent = '';
    }
  };

  useEffect(() => {
    //slider mechanics

    const handleArrowLeftClick = () => {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      imgRef.current.setAttribute('src', images[currentImageIndex]);
    };

    const handleArrowRightClick = () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      imgRef.current.setAttribute('src', images[currentImageIndex]);
    };

    //validation again

    const buttonClickHandler = (e) => {
      e.preventDefault();

      const checkInValue = new Date(checkIn.current.value);
      const checkOutValue = new Date(checkOut.current.value);
      const amountOfGuestsValue = amountOfGuests.current.value;

      const addInfo = (e) => {
        e.preventDefault();
        props.guests(amountOfGuestsValue);
        localStorage.setItem('Guests', amountOfGuestsValue);
      }
      payButton.current.addEventListener('click', addInfo);

      validateCheckIn();
      validateCheckOut();
      validateAmountOfGuests();

      if (checkInValue.getTime() === checkOutValue.getTime()) {
        checkOut.current.style.border = '2px solid red';
        isValidate = false;
        checkOut.current.nextElementSibling.textContent = 'Check-out date must be different from check-in date';
      }
      if (checkInValue.getTime() > checkOutValue.getTime()) {
        checkOut.current.style.border = '2px solid red';
        isValidate = false;
        checkOut.current.nextElementSibling.textContent = 'Check-out date must be after check-in date';
      }

      if (amountOfGuestsValue <= 0 || amountOfGuestsValue > 50) {
        amountOfGuests.current.style.border = '2px solid red';
        isValidate = false;
        amountOfGuests.current.nextElementSibling.textContent = 'Invalid number of guests';
      }

      let ms = checkOutValue - checkInValue;
      ms = Math.floor(ms / (1000 * 60 * 60 * 24));

      const roomPrice = +localStorage.getItem('Price');

      const finalPrice = amountOfGuestsValue * (ms * roomPrice);

      if (isValidate) {
        setIsCalculating(true);
      }

      setTimeout(() => {
        if (isValidate) {
          priceInp.current.textContent = `$ ${finalPrice}`;
          priceInfo.current.style.display = 'flex';
          priceInfo.current.style.justifyContent = 'center';
          priceInfo.current.style.alignItems = 'center';
        } else {
          priceInp.current.textContent = 'Error';
        }
        props.price(finalPrice);
        localStorage.setItem('FinalyPrice', finalPrice);
        setIsCalculating(false);
      }, 1000);
    };

    button.current.addEventListener('click', buttonClickHandler);

    arrowLeftRef.current.addEventListener('click', handleArrowLeftClick);
    arrowRightRef.current.addEventListener('click', handleArrowRightClick);


  }, []);

  useEffect(() => {
    if (selectedCheckInDate) {
      checkOut.current.min = selectedCheckInDate.toISOString().split('T')[0];
    }
  }, [selectedCheckInDate]);


  return (
    <div className={style.wrapper}>
      <h2 className={style.wrapper__header}>{header}</h2>
      <div className={style.wrapper__bookContainer}>
        <div className={style.wrapper__imgContainer}>
          <div className={style.wrapper__arrowContainer}>
            <img ref={arrowLeftRef} className={style.slider_container__slider__arrow} src={arrowLeft} alt="arrow left" id={style.left} />
            <img ref={arrowRightRef} className={style.slider_container__slider__arrow} src={arrowRight} alt="arrow right" id={style.right} />
          </div>
          <div className={style.slider_container}>
            <div className={style.slider_container__slider}>
              <img ref={imgRef} className={style.slider_container__slider__img} src={room} alt="room photos" />
            </div>
          </div>
        </div>
        <div className={style.container_form}>
          <form className={style.form} method="POST">
            <div className={style.form__group}>
              <label htmlFor="checkIn">Check-in date</label>
              <input
                ref={checkIn}
                type="date"
                min={minDate}
                id="checkIn"
                name="checkIn"
                required
                onChange={validateCheckIn}
              />
              <span className={style.error}>{checkIn.current && checkIn.current.nextElementSibling.textContent}</span>
            </div>
            <div className={style.form__group}>
              <label htmlFor="checkOut">Check-out date</label>
              <input
                ref={checkOut}
                type="date"
                id="checkOut"
                name="checkOut"
                min={checkIn.current ? checkIn.current.value : minDate}
                required
                onChange={validateCheckOut}
              />
              <span className={style.error}>{checkOut.current && checkOut.current.nextElementSibling.textContent}</span>
            </div>
            <div className={style.form__group}>
              <label htmlFor="guests">Number of guests</label>
              <input
                ref={amountOfGuests}
                type="number"
                id="guests"
                name="guests"
                min="1"
                required
                onChange={validateAmountOfGuests}
              />
              <span className={style.error}>{amountOfGuests.current && amountOfGuests.current.nextElementSibling.textContent}</span>
            </div>
            <div ref={priceInfo} id={style.price} className={style.form__group}>
              <p className={style.priceInp}>
                Final price: <span ref={priceInp}></span>
              </p>
              <a ref={payButton} className={style.form__button} href='/Best_hotel.de/payment'>
                Go to payment
              </a>
            </div>
            <button ref={button} type="submit" className={style.form__button}>
              {isCalculating ? 'Calculating...' : 'Check price'}
            </button>
          </form>
        </div>
      </div>
      <Link to='/Best_hotel.de/'>Back to homepage</Link>
      <p className={style.copy}>© Copyright 2023. Made by Oliwier Markiewicz</p>
    </div>
  );
};

export default Page;
