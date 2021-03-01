import React from 'react';

function Register() {
  return (
    <form className="authorize__form" action="">
      <h2>
        Регистрация
        </h2>
      <fieldset className="authorize__fieldset">
        <input className="authorize__input" type="email" />
        <input className="authorize__input" type="password" />
      </fieldset>
      <button className="authorize__submit" type="submit">Зарегестрироваться</button>
      <p className="authorize__text">Уже зарегестрированы? <a className="authorize__link" href="./login">Войти</a></p>
    </form>
  );
}

export default Register;