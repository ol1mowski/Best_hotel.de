import style from './EditButton.module.scss';
import edit from '../../../../assets/icons/edit.svg';
import { useEffect, useRef } from 'react';

const EditButton = ({ onClick, name }) => {
  const modifyButton = useRef(null);

  useEffect(() => {
    const click = () => {
      onClick(); // Wywołujemy funkcję przekazaną przez props onClick
    };

    modifyButton.current.addEventListener('click', click);

    return () => {
      modifyButton.current.removeEventListener('click', click);
    };
  }, [onClick]);

  return (
    <div className={style.clientsInfoContainer}>
      <div className={style.clientsInfoContainer__client}>
        <span className={style.clientsInfoContainer__client__span}>
          {name}
        </span>
        <img
          ref={modifyButton}
          className={style.clientsInfoContainer__client__img}
          src={edit}
          alt='Edit button'
        />
      </div>
    </div>
  );
};

export default EditButton;
