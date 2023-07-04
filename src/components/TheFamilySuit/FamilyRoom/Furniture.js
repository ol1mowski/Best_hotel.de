import style from './FamilyRoom.module.scss';
import kitchen from '../../../assets/pictures/kitchen.png';
import bathroom from '../../../assets/pictures/bathroom.png';

const Furniture = () => {
    return(
        <>
        <div className={style.Wrapper}>
                    <img className={style.img} src={kitchen} alt='kitchen' />
                    <div className={style.contentWrapper}>
                        <span className={style.content}>
                        An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!
                        </span>
                    </div>
                </div>
                <div className={style.Wrapper}>
                <img className={style.img} src={bathroom} alt='bathroom' />
                    <div className={style.contentWrapper}>
                        <span className={style.content}>
                        An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!
                        </span>
                    </div>
                </div>
        </>
    )
}

export default Furniture;