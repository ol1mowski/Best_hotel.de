import React, { useState } from 'react';
import style from './PaymentPage.module.scss';
import Box from './Box/Box';
import ClientInfo from './ClientInfo/ClientInfo';
import Summary from './Summary/Summary';
import Addtions from './Addtions/Addtions';
import PaymentsMethod from './PaymentsMethod/PaymentsMethod';
import MainContext from '../../Context/MainContext';

const PaymentPage = (props) => {
  const [activeBox, setActiveBox] = useState(1);

  const handleBoxClick = (number) => {
    setActiveBox(number);
  };

  return (
    <div className={style.container}>
      <div className={style.container__wrapper}>
        <Box
          click={() => handleBoxClick(1)}
          name="Your Data"
          number={1}
          isActive={activeBox === 1}
        />
        <div className={activeBox === 1 ? style.activeBox : style.inactiveBox}>
          <ClientInfo />
        </div>

        <Box
          click={() => handleBoxClick(2)}
          name="Additional"
          number={2}
          isActive={activeBox === 2}
        />
        <div className={activeBox === 2 ? style.activeBox : style.inactiveBox}>
          <Addtions />
        </div>

        <Box
          click={() => handleBoxClick(3)}
          name="Payment method"
          number={3}
          isActive={activeBox === 3}
        />
        <div className={activeBox === 3 ? style.activeBox : style.inactiveBox}>
          <PaymentsMethod />
        </div>
      </div>

      <div className={style.container__summary}>
        <Summary price={props.price} guests={props.guests} />
      </div>
      <p className={style.copy}>© Copyright 2023. Made by Oliwier Markiewicz</p>
    </div>
  );
};

export default PaymentPage;
