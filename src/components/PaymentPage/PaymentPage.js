import React, { createContext, useState, useContext } from 'react';
import style from './PaymentPage.module.scss';
import Box from './Box/Box';
import ClientInfo from './ClientInfo/ClientInfo';
import Summary from './Summary/Summary';
import Addtions from './Addtions/Addtions';
import PaymentsMethod from './PaymentsMethod/PaymentsMethod';
import MainContext from '../../Context/MainContext';

const showContext = createContext({
  show: true,
  setShow: () => { },
});

const boxLabels = [
  {
    id: 1,
    number: 1,
    name: 'Your Data',
  },
  {
    id: 2,
    number: 2,
    name: 'Additional',
  },
  {
    id: 3,
    number: 3,
    name: 'Payment method',
  },
];



const PaymentPage = (props) => {
  const [show, setShow] = useState(true);
  const click = () => {
    setShow((prevShow) => !prevShow);
  };


  return (
    <div className={style.container}>
      <div className={style.container__wrapper}>
        <Box
          click={click}
          name={boxLabels[0].name}
          number={boxLabels[0].number}
        />
        {show ? <ClientInfo /> : null}
        {/* <Box
          click={click}
          name={boxLabels[1].name}
          number={boxLabels[1].number}
        />
        {show ? <Addtions /> : null}
        <Box
          click={click}
          name={boxLabels[2].name}
          number={boxLabels[2].number}
        />
        {show ? <PaymentsMethod /> : null} {/* <Box
          click={click}
          name={boxLabels[1].name}
          number={boxLabels[1].number}
        />
        {show ? <Addtions /> : null}
        <Box
          click={click}
          name={boxLabels[2].name}
          number={boxLabels[2].number}
        />
        {show ? <PaymentsMethod /> : null} */}
      </div>
      <div className={style.container__summary}>
        <Summary price={props.price} guests={props.guests}/>
      </div>
    </div>
  );
};

export default PaymentPage;
