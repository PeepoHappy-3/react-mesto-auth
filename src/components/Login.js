import React from 'react';

function Login(props) {
  return (
    <div>
      <form className="authorize__form" action="">
        <h2>
          Вход
        </h2>
        <fieldset className="authorize__fieldset">
          <input className="authorize__input" type="email" />
          <input className="authorize__input" type="password" />
        </fieldset>
        <button className="authorize__submit" type="submit">Войти</button>
      </form>
    </div>)
}

export default Login;