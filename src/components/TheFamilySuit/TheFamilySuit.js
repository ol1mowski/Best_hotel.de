import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import FamilyRoom from './FamilyRoom/FamilyRoom';
import Furniture from './FamilyRoom/Furniture';
import style from './TheFamilySuit.module.scss';

const TheFamilySuit = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animacja zostanie uruchomiona tylko raz
    threshold: 0.2, // Połowa komponentu musi być widoczna
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }, // Dodana animacja wygładzająca
    },
  };

  return (
    <motion.div
      className={style.container}
      id="family-suit"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className={style.string}>
        <h2 className={style.header}>The Family<br /> Suit</h2>
        <span className={style.description}>Showcase the best your property has to offer by highlighting one of your accommodations. Add a flattering photo, then describe the room's best feature.</span>
      </div>
      <div className={style.img}>
        <FamilyRoom />
      </div>
      <div className={style.furniture}>
        <Furniture />
      </div>
    </motion.div>
  );
};

export default TheFamilySuit;
