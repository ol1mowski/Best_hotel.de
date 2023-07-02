import { Link } from "react-scroll";
import style from "./HomeSiteButton.module.scss";
const HomeSiteButton = () => {
      

    return (
        <div>
    <Link
        activeClass="active"
        to="more"
        spy={true}
        smooth={true}
        offset={-70}
        duration={1200}
    >
        <button className={style.button}>
            Learn more
        </button>
      </Link>
        </div>
    );
};

export default HomeSiteButton;

