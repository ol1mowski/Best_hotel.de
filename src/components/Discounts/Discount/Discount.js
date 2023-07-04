import style from './Discount.module.scss';

const Discount = (props) => {

    return(
        <div className={style.container}>
            <div className={style.Wrapper}>
            <img className={style.img} src={props.img} alt='booking online photo' />
                <div className={style.contentWrapper}>
                    <span className={style.content}>
                    <h3 className={style.contentHeader}>{props.title}</h3>
                    <span className={style.contentBelow}>{props.more}</span> 
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Discount;