// EditButton.js
import style from './EditButton.module.scss';
import edit from '../../../../assets/icons/edit.svg';
import { useEffect, useRef } from 'react';

const EditButton = ({ onClick, name }) => {
  const modifyButtonRef = useRef(null);

  useEffect(() => {
    const clickHandler = () => {
      onClick();
    };

    if (modifyButtonRef.current) {
      modifyButtonRef.current.addEventListener('click', clickHandler);
    }

    return () => {
      if (modifyButtonRef.current) {
        modifyButtonRef.current.removeEventListener('click', clickHandler);
      }
    };
  }, [onClick]);

  return (
    <div className={style.clientsInfoContainer}>
      <div className={style.clientsInfoContainer__client}>
        <span className={style.clientsInfoContainer__client__span}>
          {name}
        </span>
        <img
          ref={modifyButtonRef}
          className={style.clientsInfoContainer__client__img}
          src={edit}
          alt='Edit button'
        />
      </div>
    </div>
  );
};

export default EditButton;
