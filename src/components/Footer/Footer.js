import style from './Footer.module.scss';
import location from '../../assets/icons/location.svg';
import telephone from '../../assets/icons/telephone.svg';
import mail from '../../assets/icons/mail.svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import instagram from '../../assets/icons/instagram.svg';

const Footer = () => {
    return (
        <div className={style.footer}>
            <h2 className={style.h2}>The Wellhall</h2>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.box}>
                        <span>Reservations Office</span>
                        <div className={style.infoContainer}>
                            <div className={style.boxes}>
                                <img src={location} alt='location logo' />
                                <span className={style.locationInfo}>123 Anywhere St.Any City ST 12345</span>
                            </div>
                            <div className={style.boxes}>
                                <img src={telephone} alt='telephone logo' />
                                <span className={style.locationInfo}>1123-456-7890 </span>
                            </div>
                            <div className={style.boxes}>
                                <img src={mail} alt='mail logo' />

                                <span className={style.locationInfo}>hello@reallygreatsite.com</span>

                            </div>
                        </div>
                    </div>
                    <div className={style.box} id={style.middle}>
                        <span>Office Hours</span>
                        <div id={style.infoContainerMiddle} className={style.infoContainer}>
                            <p className={style.openTimes}>Monday to Friday</p>
                            <p className={style.openTimes}>9:00 am to 6:00 pm</p>
                            <p className={style.openTimes}>Saturday</p>
                            <p className={style.openTimes}>9:00 am to 12:00 noon</p>
                        </div>
                    </div>
                    <div className={style.box}>
                        <span>Get Social</span>
                        <div id={style.social} className={style.infoContainer}>
                            <div className={style.socialIcons}>
                                <div className={style.icon}>
                                    <a href='https://www.facebook.com/' target='_blank'>
                                        <img src={facebook} alt='facebook logo' />
                                    </a>
                                </div>
                                <div className={style.icon}>
                                    <a href='https://www.instagram.com/' target='_blank'>
                                        <img src={instagram} alt='instagram logo' />
                                    </a>
                                </div>
                                <div className={style.icon}>
                                    <a href='https://twitter.com/' target='_blank'>
                                        <img src={twitter} alt='twitter logo' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={style.tag}>
                            <p className={style.tagContent}>Tag us in your photos!</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className={style.copy}>© Copyright 2023. Made by Oliwier Markiewicz</p>
        </div>
    )
}

export default Footer;