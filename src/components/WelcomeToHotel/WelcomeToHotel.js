import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import img from '../../assets/pictures/tourist-cutout.png';
import style from './WelcomeToHotel.module.scss';

const WelcomeToHotel = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 2, delay: 0.2 } },
  };

  return (
    <div className={style.container} id="more" ref={ref}>
      <motion.div
        className={style.strings}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <h2 className={style.header}>
          Welcome to your <br /> luxurious home away <br /> from home
        </h2>
        <span className={style.content}>
          Write a paragraph that talks about your brand or property here. Convince your prospective clients to choose you
          and your offerings by highlighting the qualities that set you apart from the competition. Your audience is already
          on your website, so push a little bit harder to seal the deal!
        </span>
      </motion.div>
      <motion.div
        className={style.image}
        variants={imageVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.img loading="lazy" className={style.img} src={img} alt="Happy client" />
      </motion.div>
    </div>
  );
};

export default WelcomeToHotel;
