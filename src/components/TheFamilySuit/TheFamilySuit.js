import FamilyRoom from './FamilyRoom/FamilyRoom';
import style from './TheFamilySuit.module.scss';

const TheFamilySuit = () => {
    return(
        <div className={style.container}>
            <h2 className={style.header}>The Family Suit</h2>
            <span className={style.description}>Showcase the best your property has to offer by highlighting one of your accommodations. Add a flattering photo, then describe the room's best feature.</span>
            <FamilyRoom />
        </div>
    )
}


export default TheFamilySuit;