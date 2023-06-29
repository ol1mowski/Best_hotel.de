import style from './Accommodation.module.scss';
import Room from './Room/Room';

const Accommodation = (props) => {

    return(
        <div className={style.container}>
            <p className={style.header}>Accommodation</p>
            <Room hotel={props.hotel}/>
        </div>
    )
}

export default Accommodation;