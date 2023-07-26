import React, { useState } from 'react';
import style from './PaymentPage.module.scss';
import Box from './Box/Box';
import ClientInfo from './ClientInfo/ClientInfo';
import Summary from './Summary/Summary';
import Addtions from './Addtions/Addtions';
import PaymentsMethod from './PaymentsMethod/PaymentsMethod';
import MainContext from '../../Context/MainContext';

const PaymentPage = (props) => {
  const [show, setShow] = useState(true);

  const click = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className={style.container}>
      <div className={style.container__wrapper}>
        <Box click={click} name="Your Data" number={1} />
        <div style={{ display: show ? 'block' : 'none' }}>
          <ClientInfo />
        </div>

        <Box click={click} name="Additional" number={2} />
        <div style={{ display: show ? 'block' : 'none' }}>
          <Addtions />
        </div>

        <Box click={click} name="Payment method" number={3} />
        <div style={{ display: show ? 'block' : 'none' }}>
          <PaymentsMethod />
        </div>
      </div>

      <div className={style.container__summary}>
        <Summary price={props.price} guests={props.guests} />
      </div>
    </div>
  );
};

export default PaymentPage;
