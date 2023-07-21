import style from './LoadingPage.module.scss';
import loading from '../../../assets/pictures/loading.gif';

const LoadingPage = () => {
    return(
        <div className={style.container}>
            <div className={style.textWrapper}>
                <span>
                    Welcome to Bahamas!
                </span>
                <img src={loading} alt='Loading...' />
            </div>
        </div>
    )
}

export default LoadingPage;