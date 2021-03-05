import React from 'react';
function ImagePopup(props) {
  const ref = React.useRef();
  function handleOverlayClose(e) {
    if (e.target === ref.current)
      props.onClose();
  }
  return (
    <div className={`popup popup_type_image ${props.isOpened && "popup_opened"}`} onClick={handleOverlayClose} ref={ref}>
      <div className="popup__container" >
        <button type="button" className="popup__close" onClick={props.onClose}></button>
        <figure className="popup__figure">
          <img src={props.card.src} alt={props.card.name} className="popup__image" />
          <figcaption className="popup__caption">{`${props.card.name}`}</figcaption>
        </figure>
      </div>
    </div>
  );
}
export default ImagePopup;
