import style from "./HomeSiteButton.module.scss";
const HomeSiteButton = () => {
      

    return (
        <div>
            <a href="#more">
                <button className={style.button}>
                    Learn more
                </button>
            </a>
        </div>
    );
};

export default HomeSiteButton;

