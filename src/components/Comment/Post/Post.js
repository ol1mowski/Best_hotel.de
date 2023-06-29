import style from'./Post.module.scss';
import quote from'../../../assets/icons/quote.svg';

const Post = () => {
    return(
        <div className={style.wrapper}>
            <img className={style.quote} src={quote} alt='Quote' />
            <p className={style.content}>
                Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.
            </p>
            <p className={style.content}>
                - 
            </p>
            <p className={style.content}>
                Santa Solana Post
            </p>
            <img className={style.quote} src={quote} alt='Quote' />
            <p className={style.content}>
                Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.
            </p>
            <p className={style.content}>
                - 
            </p>
            <p className={style.content}>
                Mariana's Luxe Travels
            </p>
            <img className={style.quote} src={quote} alt='Quote' />
            <p className={style.content}>
                Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.
            </p>
            <p className={style.content}>
                - 
            </p>
            <p className={style.content}>
            Fairhill Journal
            </p>
        </div>
    )
}

export default Post;