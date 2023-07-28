import React, { useRef, useEffect } from 'react';
import HomeSiteTitle from './HomeSiteTitle/HomeSiteTitle';
import MainVideo from '../../assets/main_video.mp4';
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
    pointerEvents: 'none',
  };

  return (
    <>
      <div style={background}>
        <video ref={videoRef} style={videoStyle} autoPlay muted loop playsInline preload="auto">
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
