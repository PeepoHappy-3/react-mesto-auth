import React from 'react';

function PopupWithForm(props) {
  const ref = React.useRef();

  function handleOverlayClose(e) {
    if (e.target === ref.current)
      props.onClose();
  }
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpened && "popup_opened"}`} ref={ref} onClick={handleOverlayClose}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={props.onClose}></button>
        <form action="#" className="popup__form" name={props.name} noValidate onSubmit={props.onSubmit}>
          <h2 className="popup__title">
            {props.title}
          </h2>
          {props.children}
          <button type="submit" className="popup__submit" >Сохранить</button>
        </form>
      </div>
    </div >
  );
}

export default PopupWithForm;