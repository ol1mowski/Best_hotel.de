import { useState, useRef } from 'react';
import style from './ClientsInfo.module.scss';

const ClientsInfo = () => {
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (nameRef.current.value.trim() === '') {
      errors.name = 'Name must not be empty';
    }

    if (surnameRef.current.value.trim() === '') {
      errors.surname = 'Surname must not be empty';
    }

    if (emailRef.current.value.trim() === '') {
      errors.email = 'Email must not be empty';
    }

    if (phoneRef.current.value.trim() === '') {
      errors.phone = 'Phone number must not be empty';
    } else if (phoneRef.current.value.length !== 15) {
      errors.phone = 'Phone number must be 15 digits long';
    }

    setFormErrors(errors);
  };

  const handleInputChange = (fieldName) => {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: null,
    }));
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.container__form}>
        <h2>Enter your data</h2>
        <div className={style.container__form__formGroup}>
          <label htmlFor="name">Name: </label>
          <input
          placeholder='Jon'
            type="text"
            id="name"
            name="name"
            ref={nameRef}
            onChange={() => handleInputChange('name')}
          />
          {formErrors.name && (
            <p className={style.error}>[-] {formErrors.name}</p>
          )}
        </div>
        <div className={style.container__form__formGroup}>
          <label htmlFor="surname">Surname: </label>
          <input
           placeholder='Jackson'
            type="text"
            id="surname"
            name="surname"
            ref={surnameRef}
            onChange={() => handleInputChange('surname')}
          />
          {formErrors.surname && (
            <p className={style.error}>[-] {formErrors.surname}</p>
          )}
        </div>
        <div className={style.container__form__formGroup}>
          <label htmlFor="email">E-mail address:</label>
          <input
            placeholder='examples@ex.uk'
            type="email"
            id="email"
            name="email"
            ref={emailRef}
            onChange={() => handleInputChange('email')}
          />
          {formErrors.email && (
            <p className={style.error}>[-] {formErrors.email}</p>
          )}
        </div>
        <div className={style.container__form__formGroup}>
          <label htmlFor="phone">Phone number:</label>
          <input
          placeholder='+44 111 222 333'
            type='phone'
            id="phone"
            name="phone"
            ref={phoneRef}
            onChange={() => handleInputChange('phone')}
          />
          {formErrors.phone && (
            <p className={style.error}>[-] {formErrors.phone}</p>
          )}
        </div>
        <div className={style.container__form__formGroup}>
          <button className={style.container__form__formGroup__button} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ClientsInfo;
