import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import style from './Accommodation.module.scss';
import Room from './Room/Room';

const Accommodation = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animacja zostanie uruchomiona tylko raz
    rootMargin: '0px 0px -50% 0px', // Przesunięcie granicy obserwacji, -50% od dołu komponentu
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.3 } },
  };

  return (
    <motion.div
      className={style.container}
      id="accommodation"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <p className={style.header}>Accommodation</p>
      <Room hotel={props.hotel} />
    </motion.div>
  );
};

export default Accommodation;
