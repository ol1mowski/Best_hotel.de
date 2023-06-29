import img from '../../assets/pictures/tourist-cutout.png';
import style from './WelcomeToHotel.module.scss';

const WelcomeToHotel = () => {

    return(
        <div className={style.container}>
            <h2 className={style.header}>
                Welcome to your <br /> luxurious home away <br /> from home 
            </h2>
            <span className={style.content}>
                Write a paragraph that talks about your brand or property here. Convince your prospective clients to choose you and your offerings by highlighting the qualities that set you apart from the competition. Your audience is already on your website, so push a little bit harder to seal the deal!
            </span>
            <img loading='lazy' className={style.img} src={img} alt="Happy client"/>
        </div>
    )
}

export default WelcomeToHotel;