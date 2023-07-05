import style from'./Comment.module.scss';
import backgroundPhoto from '../../assets/pictures/hotel_coridor.png';
import Post from './Post/Post';

// const background = {
//     backgroundImage: `url(${backgroundPhoto})`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     width: '100vw',
//     height: '140vh',
//     display: 'block',
//     // filter: 'contrast(60%)',
// };


const posts = [
    {
        id: 1,
        user: 'Santa Solana Post',
        content: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    },
    {
        id: 2,
        user: "Mariana's Luxe Travels",
        content: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    },
    {
        id: 3,
        user: "Fairhill Journal",
        content: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
    },
]

const Comment = () => {
    return(
        <div className={style.mainWrapper}>
            <div className={style.background}>
            <h2 className={style.content}>In the Press</h2>
                <div className={style.main}>
                    <Post 
                    user={posts[0].user}
                    content={posts[0].content}
                    /> 
                    <Post 
                    user={posts[1].user}
                    content={posts[1].content}
                    /> 
                    {/* <Post 
                    user={posts[2].user}
                    content={posts[2].content}
                    />  */}
                </div>
            </div>
        </div>
    )
}

export default Comment;