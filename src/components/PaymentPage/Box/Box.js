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
    }, [])

    return(
        <div className={style.container}>
        <div className={style.container__data}>
            <h2> {props.number}. {props.name}<img ref={arrow} src={arrowDown} alt="arrow Down" className={style.container__data__image} /></h2>
        </div>
        {/* <ClientsInfo />
        <Addtions /> */}
    </div>
    )
}

export default Box;