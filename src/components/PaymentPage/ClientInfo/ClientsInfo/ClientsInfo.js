import { useState, useRef, useEffect } from 'react';
import style from './ClientsInfo.module.scss';

const ClientsInfo = ({ data, onSaveData }) => {
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const [formData, setFormData] = useState(data);

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    // Initialize default values when component mounts
    setFormData(data);
  }, [data]);

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

    if (Object.keys(errors).length === 0) {
      // If there are no errors, create the data object and save the input data
      const dataObject = {
        name: nameRef.current.value.trim(),
        surname: surnameRef.current.value.trim(),
        email: emailRef.current.value.trim(),
        phone: phoneRef.current.value.trim(),
      };
      onSaveData(dataObject); // Save the data for the specific guest
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
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
            onChange={handleInputChange}
            value={formData.name} // Set the default value
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
            onChange={handleInputChange}
            value={formData.surname} // Set the default value
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
            onChange={handleInputChange}
            value={formData.email} // Set the default value
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
            onChange={handleInputChange}
            value={formData.phone} // Set the default value
          />
          {formErrors.phone && (
            <p className={style.error}>[-] {formErrors.phone}</p>
          )}
        </div>
        <div className={style.container__form__formGroup}>
          <button className={style.container__form__formGroup__button} type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default ClientsInfo;
