import React from 'react';
import Succes from '../images/succes.svg';
import Denied from '../images/denied.svg'
function InfoTooltip(props) {
  return (
    <div className={`popup popup_type_info ${props.isOpened && "popup_opened"}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={props.onClose}></button>
        <div className="popup__inner">
          {props.isSucces ? (<>
            <img src={Succes} className="popup__icon" />
            <p className="popup__info">Вы успешно зарегистрировались!</p>
          </>) : (<><img src={Denied} className="popup__icon" />
            <p className="popup__info">Что-то пошло не так!
Попробуйте ещё раз.</p></>)
          }
        </div>
      </div>
    </div>
  );
}
export default InfoTooltip;