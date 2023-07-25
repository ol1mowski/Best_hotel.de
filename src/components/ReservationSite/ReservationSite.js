import React, { useContext, useState } from 'react';
import LoadingPage from '../UI/LoadingPage/LoadingPage';
import Page from './Page/Page';
import MainContext from '../../Context/MainContext';

const ReservationSite = (props) => {

  const [loading, Setloading] = useState(true);

  setTimeout(() => {
    Setloading(false);
  }, 1000)

  // const [price, Setprice] = useState('');

  const ctx = useContext(MainContext);

  console.log(ctx);

  return (
    <>
    {loading ? <LoadingPage /> :  <Page guests={props.guests} price={props.price}/>}
    </>
  );
};

export default ReservationSite;
