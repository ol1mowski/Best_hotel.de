import style from './AddButton.module.scss';
import plus from '../../../../assets/icons/plus.svg';

const AddButton = () => {
    return (
        <>
            <div className={style.addContainer}>
                <img className={style.addContainer__img} src={plus} alt='plus image' />
            </div>
        </>
    )
};

export default AddButton;