import style from './FamilyRoom.module.scss';
import room from '../../../assets/pictures/hotel_room.png';

const FamilyRoom = () => {
    return(
        <div>
            <div className={style.Wrapper}>
                <img className={style.img} src={room} alt='room' />
                <div className={style.contentWrapper}>
                    <span className={style.content}>
                        An intriguing caption that describes the room goes here.
                        Use a flattering photo, then describe away!
                    </span>
                </div>
            </div>
            
        </div>
    )
}

export default FamilyRoom;