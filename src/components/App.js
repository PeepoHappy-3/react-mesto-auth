import Logo from '../images/logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Register from './Register';
import auth from '../utils/auth';

function App() {
  const [isEditProfilePopupOpened, setIsEditProfilePopupOpened] = React.useState(false);
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpened] = React.useState(false);
  const [isAddPlacePopupOpened, setIsAddPlacePopupOpened] = React.useState(false);
  const [isImagePopupOpened, setIsImagePopupOpened] = React.useState(false);
  const [isInfoTooltipOpened, setIsInfoTooltipOpened] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});

  const [cards, setCards] = React.useState([]);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const [isSucces, setIsSucces] = React.useState(false);
  React.useEffect(() => {

    async function getContent() {
      try {
        setCards(await api.getInitialCards());
      } catch (e) {
        console.log(e);
      }
    }
    getContent();
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.likes.some((l) => {
      return l._id === currentUser._id;
    });
    try {
      const newCard = await api.changeLikeStatus(card._id, isLiked);
      const newCards = cards.map((c) => {
        return c._id === card._id ? newCard : c;
      });
      setCards(newCards);
    }
    catch (e) {
      console.log(e.message);
    }
  }

  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);
      const newCards = cards.filter((c) => {
        return c._id !== card._id;
      })
      setCards(newCards);
    } catch (e) {
      console.log(e.message);
    }
  }
  React.useEffect(() => {
    async function getUserInfo() {
      try {
        setCurrentUser(await api.getProfileInfo());
      } catch (e) {
        console.log(e.message);
      }
    }
    getUserInfo();
  }, []);
  function handleAvatarClick() {
    setIsEditAvatarPopupOpened(true);
  }
  function handleProfileClick() {
    setIsEditProfilePopupOpened(true);
  }
  function handleAddClick() {
    setIsAddPlacePopupOpened(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
      ...selectedCard,
      src: card.link,
      name: card.name
    });
    setIsImagePopupOpened(true);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpened(false);
    setIsEditProfilePopupOpened(false);
    setIsAddPlacePopupOpened(false);
    setIsImagePopupOpened(false);
    setIsInfoTooltipOpened(false);
  }

  async function handleUpdateUser(user) {
    try {
      setCurrentUser(await api.setProfileInfo(user));
      closeAllPopups();
    } catch (e) {
      console.log(e.message);
    }
  }

  async function handleUpdateAvatar(link) {
    try {
      setCurrentUser(await api.setProfileAvatar(link));
      closeAllPopups();
    }
    catch (e) {
      console.log(e.message);
    }
  }

  async function handleAddPlaceSubmit(data) {
    try {
      setCards([await api.postNewCard(data), ...cards]);
      closeAllPopups();
    } catch (e) {
      console.log(e.message);
    }
  }

  async function handleRegister(data) {
    try {
      await auth.registration(data);
      setIsSucces(true);
      setIsInfoTooltipOpened(true);
    }
    catch (e) {
      setIsSucces(false);
      setIsInfoTooltipOpened(true);
      return Promise.reject(new Error(e.message));
    }
  }

  async function handleLogin(data) {
    try {
      const jwt = await auth.login(data);
      const res = await auth.checkToken(jwt.token);
      setEmail(res.data.email);
      setLoggedIn(true);
    }
    catch (e) {
      return Promise.reject(new Error(e.message));
    }
  }

  function handleLogOut() {
    setLoggedIn(false);
  }
  return (
    <>
      <div className="page">
        <div className="page__container">

          <CurrentUserContext.Provider value={currentUser}>

            <Header src={Logo} onLogOut={handleLogOut} email={email} loggedIn={loggedIn} />
            <Switch>
              <ProtectedRoute exact path="/" component={Main} loggedIn={loggedIn}
                onEditAvatar={handleAvatarClick} onEditProfile={handleProfileClick}
                onAddPlace={handleAddClick} onCardClick={handleCardClick}
                cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete}
              />
              <Route path="/sign-in">
                <div className="authorize">
                  <Login onSubmit={handleLogin} />
                </div>
              </Route>
              <Route path="/sign-up">
                <div className="authorize">
                  <Register onSubmit={handleRegister} />
                </div>
              </Route>
              <Route>
                {loggedIn ? (<Redirect to="/" />) : (<Redirect to="/sign-up" />)}
              </Route>
            </Switch>
            <Footer />
            <EditProfilePopup isOpened={isEditProfilePopupOpened} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <EditAvatarPopup isOpened={isEditAvatarPopupOpened} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
            <AddPlacePopup isOpened={isAddPlacePopupOpened} onClose={closeAllPopups} onSubmit={handleAddPlaceSubmit} />
            <InfoTooltip isOpened={isInfoTooltipOpened} onClose={closeAllPopups} isSucces={isSucces} />
          </CurrentUserContext.Provider>
        </div>
        <PopupWithForm name="confirm" title="Вы уверены?" onClose={closeAllPopups} />
        <ImagePopup card={selectedCard} isOpened={isImagePopupOpened} onClose={closeAllPopups} />
      </div>
    </>
  );
}

export default App;
