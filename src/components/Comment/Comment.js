import style from'./Comment.module.scss';
import backgroundPhoto from '../../assets/pictures/hotel_coridor.png';
import Post from './Post/Post';

const background = {
    position: 'relative',
    backgroundImage: `url(${backgroundPhoto})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100vw',
    height: '140vh',
    display: 'block',
    filter: 'contrast(60%)',
};

const wrapper = {
    position: 'relative',
}

const Comment = () => {
    return(
        <div style={wrapper}>
            <div style={background}></div>
            <h2 className={style.content}>In the Press</h2>
            <Post />
        </div>
    )
}

export default Comment;