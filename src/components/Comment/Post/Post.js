import style from'./Post.module.scss';
import quote from'../../../assets/icons/quote.svg';

const Post = (props) => {
    return(
        <div className={style.wrapper}>
            <img className={style.quote} src={quote} alt='Quote' />
            <p className={style.content}>
                {props.content}
            </p>
            <p className={style.content}>
                - 
            </p>
            <p className={style.content}>
                {props.user}
            </p>
        </div>
    )
}

export default Post;