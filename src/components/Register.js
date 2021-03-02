import React from 'react';
import { withRouter, useHistory, Link } from 'react-router-dom';
function Register(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({ password, email }).then(() => {
      history.push('/sign-in');
    }).catch(e => {
      console.log(e.message)
    })
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
    <form className="authorize__form" action="#" onSubmit={handleSubmit}>
      <h2 className="authorize__heading">
        Регистрация
        </h2>
      <fieldset className="authorize__fieldset">
        <input value={email || ''} onChange={handleEmailChange} name="email" className="authorize__input" type="email" />
        <input value={password || ''} onChange={handlePasswordChange} name="password" className="authorize__input" type="password" />
      </fieldset>
      <button className="authorize__submit" type="submit">Зарегестрироваться</button>
      <p className="authorize__text">Уже зарегестрированы? <Link className="authorize__link" to="./sign-in">Войти</Link></p>
    </form>
  );
}

export default withRouter(Register);