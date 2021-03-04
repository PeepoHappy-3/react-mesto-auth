import React from "react";
import { Link, Route, Switch } from 'react-router-dom';


function Header(props) {
  const [isBurgerActive, setIsBurgerActive] = React.useState(false);

  function handleBurgerClick() {
    setIsBurgerActive(!isBurgerActive);
  }

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo">
          <img src={props.src} alt="Логотип с надписью Место." className="header__logo-img" />
        </Link>
        <div className="header__burger" onClick={handleBurgerClick}>
          <span className={`header__burger-line ${isBurgerActive && "header__burger-line_cross"}`}></span>
        </div>
      </div>
      <div className={`header__profile ${!isBurgerActive && "header__profile_hidden"}`}>
        {props.loggedIn ? (<p className="header__email">{props.email}</p>) : ''}
        <Switch>
          <Route path="/sign-in">
            <Link to="/sign-up" className="header__link">Регистрация</Link>
          </Route>
          <Route path="/sign-up">
            <Link to="/sign-in" className="header__link">Войти</Link>
          </Route>
          <Route exact path="/">
            <Link to="/sign-up" onClick={props.onLogOut} className="header__link">Выйти</Link>
          </Route>
        </Switch>
      </div>
    </header >
  );
}

export default Header;