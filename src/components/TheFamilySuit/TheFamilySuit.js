import FamilyRoom from './FamilyRoom/FamilyRoom';
import Furniture from './FamilyRoom/Furniture';
import style from './TheFamilySuit.module.scss';

const TheFamilySuit = () => {
    return(
        <div className={style.container}>
            <div className={style.string}>
                <h2 className={style.header}>The Family<br /> Suit</h2>
                <span className={style.description}>Showcase the best your property has to offer by highlighting one of your accommodations. Add a flattering photo, then describe the room's best feature.</span>
            </div>
            <div className={style.img}>
                <FamilyRoom />
            </div>
            <div className={style.furniture}>
                <Furniture />
            </div>
        </div>
    )
}


export default TheFamilySuit;