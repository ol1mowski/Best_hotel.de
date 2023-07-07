import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import style from './Discounts.module.scss';
import bookOnline from '../../assets/pictures/booking_online.png';
import spa from '../../assets/pictures/spa.png';
import tourist from '../../assets/pictures/tourist_with_suitcase.png';
import Discount from './Discount/Discount';

const Discounts = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animacja zostanie uruchomiona tylko raz
    threshold: 0.3, // Połowa komponentu musi być widoczna
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const discounts = [
    {
      id: 1,
      title: 'Early Bird Discount',
      more: 'List your offers, promos, or special membership privileges and perks here to entice people to book your property.',
      img: bookOnline,
    },
    {
      id: 2,
      title: 'Wellhall Members Club',
      more: 'List your offers, promos, or special membership privileges and perks here to entice people to book your property.',
      img: spa,
    },
    {
      id: 3,
      title: 'Book 3 Nights, Get 1 Night Free',
      more: 'List your offers, promos, or special membership privileges and perks here to entice people to book your property.',
      img: tourist,
    },
  ];

  return (
    <motion.div
      className={style.container}
      id="discounts"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <h2 className={style.header}>Promos and Offers</h2>
      <div className={style.discountWrappper}>
        {discounts.map((discount) => (
          <Discount
            key={discount.id}
            title={discount.title}
            more={discount.more}
            img={discount.img}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Discounts;
