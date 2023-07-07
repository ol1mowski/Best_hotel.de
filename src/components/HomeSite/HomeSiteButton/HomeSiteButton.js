import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import style from './HomeSiteButton.module.scss';

const HomeSiteButton = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

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
        <motion.button
          className={style.button}
          variants={buttonVariants}
          whileHover="hover"
        >
          Learn more
        </motion.button>
      </Link>
    </div>
  );
};

export default HomeSiteButton;
