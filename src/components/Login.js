import React from 'react';
import { withRouter } from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({ password, email });
  }
  function handleEmailChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  return (
    <div>
      <form className="authorize__form" action="#" onSubmit={handleSubmit}>
        <h2 className="authorize__heading">
          Вход
        </h2>
        <fieldset className="authorize__fieldset">
          <input value={email || ''} onChange={handleEmailChange} name="email" className="authorize__input" type="email" />
          <input value={password || ''} onChange={handlePasswordChange} name="password" className="authorize__input" type="password" />
        </fieldset>
        <button className="authorize__submit" type="submit">Войти</button>
      </form>
    </div>)
}

export default withRouter(Login);