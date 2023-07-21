import style from './Summary.module.scss';



const Sumary = () => {

    return(
        <div className={style.container}>
            <h2>Summary</h2>
            <div className={style.container__finalyPrice}>
                <ul className={style.container__finalyPrice__ul}>
                    <li>Hotel Room: $200</li>
                </ul>
                <h2>Total Price: $800</h2>
                <button className={style.container__finalyPrice__button}>
                    Pay now
                </button>
            </div>
        </div>
    )
}

export default Sumary;