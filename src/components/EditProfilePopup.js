import React from 'react';

import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    e.preventDefault();
    setDescription(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description
    });
  }
  return (
    <PopupWithForm name="profile" title="Редактировать профиль" isOpened={props.isOpened}
      onClose={props.onClose} onSubmit={handleSubmit} btnName="Сохранить">
      <input id="name-input" type="text" className="popup__input  popup__input_type_title"
        placeholder="Имя" name="name" required minLength="2" maxLength="40"
        value={name || ''} onChange={handleNameChange} />
      <span id="name-input-error" className="popup__error" ></span>
      <input id="job-input" type="text" className="popup__input popup__input_type_subtitle"
        placeholder="О себе" name="about" required minLength="2" maxLength="200"
        value={description || ''} onChange={handleDescriptionChange} />
      <span id="job-input-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;