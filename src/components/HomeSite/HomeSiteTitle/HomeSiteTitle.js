import style from "./HomeSiteTitle.module.scss"

const HomeSiteTitle = () => {
    return(
        <div className={style.container}>
            <h2 className={style.first}> Welcome to</h2>
            <div className={style.second}>
                <span className={style.big}>
                    The Wellhall
                </span>
            <br /> 
            <span className={style.small}>
                Resort & Spa Hotel
            </span>
            </div>
        </div>
    )
}

export default HomeSiteTitle;