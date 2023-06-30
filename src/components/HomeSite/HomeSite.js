
import HomeSiteTitle from "./HomeSiteTitle/HomeSiteTitle";
import MainPhoto from '../../assets/pictures/Main_photo.png';
import style from './HomeSite.module.scss';
import HomeSiteButton from "./HomeSiteButton/HomeSiteButton";

const background = {
    backgroundImage: `url(${MainPhoto})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    filter: 'contrast(60%)',
};
// const items = {
//     width: '100%',
//     height: '100%',
//     background: 'white',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'start',
//     flexDirection: 'column',
//     color: '#fff',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
// }

const HomeSite = () => {
    return (
        <>
            <div style={background}> </div>
            <div className={style.items}>
                <HomeSiteTitle />  
                <HomeSiteButton />
            </div>
        </>
        
    );
};

export default HomeSite;
