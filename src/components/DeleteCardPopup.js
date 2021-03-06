import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(e.target);
  }
  return (
    <PopupWithForm name="confirm" title="Вы уверены?" isOpened={props.isOpened}
      onSubmit={handleSubmit} onClose={props.onClose} btnName="Удалить">
    </PopupWithForm>
  );
}

export default DeleteCardPopup;