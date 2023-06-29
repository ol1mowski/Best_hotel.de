import style from './Footer.module.scss';

const Footer = () => {
    return(
        <div className={style.footer}>
            <h2>The Wellhall</h2>
            <div className={style.container}>
            <div className={style.box}>
                <span>Reservations Office</span>
            </div>
            <div className={style.box}>
                <span>Office Hours</span>
            </div>
            <div className={style.box}>
                <span>Get Social</span>
            </div>
        </div>
        </div>
    )
}

export default Footer;