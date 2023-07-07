import React from 'react';
import { motion } from 'framer-motion';
import style from './HomeSiteTitle.module.scss';

const HomeSiteTitle = () => {
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <div className={style.container}>
      <motion.h2
        className={style.first}
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        Welcome to
      </motion.h2>
      <motion.div
        className={style.second}
        initial="hidden"
        animate="visible"
        variants={subtitleVariants}
      >
        <motion.span className={style.big}>The Wellhall</motion.span>
        <br />
        <motion.span className={style.small}>Resort & Spa Hotel</motion.span>
      </motion.div>
    </div>
  );
};

export default HomeSiteTitle;
