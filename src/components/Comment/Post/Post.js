import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import style from './Post.module.scss';
import quote from '../../../assets/icons/quote.svg';

const Post = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animacja zostanie uruchomiona tylko raz
    threshold: 0.5, // Połowa komponentu musi być widoczna
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }, // Dodana animacja wygładzająca
    },
  };

  return (
    <motion.div
      className={style.wrapper}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <img className={style.quote} src={quote} alt="Quote" />
      <p className={style.content}>{props.content}</p>
      <p className={style.content}>-</p>
      <p className={style.content}>{props.user}</p>
    </motion.div>
  );
};

export default Post;
