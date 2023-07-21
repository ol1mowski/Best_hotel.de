import React, { useState } from 'react';
import LoadingPage from '../UI/LoadingPage/LoadingPage';
import Page from './Page/Page';

const ReservationSite = (props) => {

  const [loading, Setloading] = useState(true);

  setTimeout(() => {
    Setloading(false);
  }, 1000)

  return (
    <>
    {loading ? <LoadingPage /> :  <Page />}
    </>
  );
};

export default ReservationSite;
