import Logo from '../images/logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteCardPopup from './DeleteCardPopup';
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Register from './Register';


function App() {
  const [isEditProfilePopupOpened, setIsEditProfilePopupOpened] = React.useState(false);
  const [isEditAvatarPopupOpened, setIsEditAvatarPopupOpened] = React.useState(false);
  const [isAddPlacePopupOpened, setIsAddPlacePopupOpened] = React.useState(false);
  const [isImagePopupOpened, setIsImagePopupOpened] = React.useState(false);
  const [isInfoTooltipOpened, setIsInfoTooltipOpened] = React.useState(false);
  const [isDeletePopupOpened, setIsDeletePopupOpened] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);

  const [deletedCard, setDeletedCard] = React.useState('');
  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});

  const [cards, setCards] = React.useState([]);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const [isSuccess, setIsSuccess] = React.useState(false);

  const history = useHistory();
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

  async function handleDeleteSubmit() {
    try {
      await api.deleteCard(deletedCard);
      const newCards = cards.filter((c) => {
        return c._id !== deletedCard;
      })
      setCards(newCards);
      closeAllPopups();
    } catch (e) {
      console.log(e.message);
    }
  }
  function handleCardDelete(card) {
    setDeletedCard(card._id);
    setIsDeletePopupOpened(true);
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

  React.useEffect(() => {
    async function checkToken() {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        try {
          const res = await api.checkToken(jwt)
          setLoggedIn(true);
          setEmail(res.data.email);
        } catch (e) {
          console.log(e.message);
        }
      }
    }
    checkToken();
  }, [loggedIn]);

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
    setIsDeletePopupOpened(false);
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
      await api.registration(data);
      setIsSuccess(true);
      setIsInfoTooltipOpened(true);
      history.push('/sign-in');
    }
    catch (e) {
      setIsSuccess(false);
      setIsInfoTooltipOpened(true);
      console.log(e.message)
    }
  }

  async function handleLogin(data) {
    try {
      const login = await api.login(data);
      const res = await api.checkToken(login.token);
      setEmail(res.data.email);
      localStorage.setItem('jwt', login.token);
      setLoggedIn(true);
    }
    catch (e) {
      console.log(e.message);
    }
  }

  function handleLogOut() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
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
            </Switch>
            <Route>
              {loggedIn ? (<Redirect exact to="/" />) : (<Redirect to="/sign-up" />)}
            </Route>
            <Footer />
            <EditProfilePopup isOpened={isEditProfilePopupOpened} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <EditAvatarPopup isOpened={isEditAvatarPopupOpened} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
            <AddPlacePopup isOpened={isAddPlacePopupOpened} onClose={closeAllPopups} onSubmit={handleAddPlaceSubmit} />
            <DeleteCardPopup isOpened={isDeletePopupOpened} onClose={closeAllPopups} onSubmit={handleDeleteSubmit} />
            <InfoTooltip isOpened={isInfoTooltipOpened} onClose={closeAllPopups} isSuccess={isSuccess} />
          </CurrentUserContext.Provider>
        </div>
        <ImagePopup card={selectedCard} isOpened={isImagePopupOpened} onClose={closeAllPopups} />
      </div>
    </>
  );
}

export default App;
