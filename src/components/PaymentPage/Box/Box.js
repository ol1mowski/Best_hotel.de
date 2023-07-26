import style from './Box.module.scss';
import arrowDown from '../../../assets/icons/arrow-down.svg';
import { useEffect, useRef } from 'react';

const Box = (props) => {

    const arrow = useRef(null);

    useEffect(() => {
        const clickHandler = () => {
            props.click();
        }

        arrow.current.addEventListener('click', clickHandler);

        return(() => {
            arrow.current.removeEventListener('click', clickHandler);
        })
    }, [arrow])

    return(
        <div className={style.container}>
        <div className={style.container__data}>
            <h2> {props.number}. {props.name}</h2>
            <img ref={arrow} src={arrowDown} alt="arrow Down" className={style.container__data__image} />
        </div>
        {/* <ClientsInfo />
        <Addtions /> */}
    </div>
    )
}

export default Box;