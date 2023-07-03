import style from './Room.module.scss';
import imgOne from '../../../assets/pictures/hotel_room.png';
import imgTwo from '../../../assets/pictures/hotel_room_bed.png';
import imgThree from '../../../assets/pictures/hotel_room_2.png';


const Room = (props) => {

    console.log()

    return(
        <div className={style.roomWrapper}>
            <div className={style.container}>
            <img className={style.img} src={imgOne} alt='example hotel room' />
            <div className={style.roomInfo}>
                <span className={style.people}>
                    2 adults | 1 child below 7
                </span>
                <span className={style.name}>
                    {props.hotel.first.name}
                </span>
                <span className={style.price}>
                    {props.hotel.first.price}
                </span>
                <button className={style.button}>Book now</button>
            </div>
        </div>
        <div className={style.container}>
            <img className={style.img} src={imgTwo} alt='example hotel room' />
            <div className={style.roomInfo}>
                <span className={style.people}>
                    2 adults | 1 child below 7
                </span>
                <span className={style.name}>
                    {props.hotel.second.name}
                </span>
                <span className={style.price}>
                    {props.hotel.second.price}
                </span>
                <button className={style.button}>Book now</button>
            </div>
        </div>
        <div className={style.container}>
            <img className={style.img} src={imgThree} alt='example hotel room' />
            <div className={style.roomInfo}>
                <span className={style.people}>
                    2 adults | 1 child below 7
                </span>
                <span className={style.name}>
                    {props.hotel.three.name}
                </span>
                <span className={style.price}>
                    {props.hotel.three.price}
                </span>
                <button className={style.button}>Book now</button>
            </div>
        </div>
        </div>
        
    )
}

export default Room;