import React, { useRef, useEffect, lazy } from 'react';
import HomeSiteTitle from './HomeSiteTitle/HomeSiteTitle';
import MainVideo from '../../assets/main_video.av1';
import style from './HomeSite.module.scss';
import HomeSiteButton from './HomeSiteButton/HomeSiteButton';

const HomeSite = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handlePlayVideo = () => {
      if (video.paused) {
        video.play();
      }
    };

    const handleDocumentClick = () => {
      handlePlayVideo();
      document.removeEventListener('click', handleDocumentClick);
    };

    video.addEventListener('loadeddata', () => {
      document.addEventListener('click', handleDocumentClick);
    });

    return () => {
      video.removeEventListener('loadeddata', () => {
        document.removeEventListener('click', handleDocumentClick);
      });
    };
  }, []);

  const background = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    pointerEvents: 'none', // Dodaj tę właściwość, aby wyłączyć zdarzenia dla elementu wideo
  };

  return (
    <>
      <div style={background}>
        <video onLoad={lazy} ref={videoRef} style={videoStyle} autoPlay muted loop playsInline>
          <source src={MainVideo} type="video/mp4" />
        </video>
      </div>
      <div className={style.items}>
        <HomeSiteTitle />
        <HomeSiteButton />
      </div>
    </>
  );
};

export default HomeSite;
