import React from 'react';
import Success from '../images/succes.svg';
import Denied from '../images/denied.svg'
function InfoTooltip(props) {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const ref = React.useRef();

  function handleOverlayClose(e) {
    if (e.target === ref.current)
      props.onClose();
  }
  React.useEffect(() => {
    setIsSuccess(props.isSuccess);
  }, [props.isSuccess]);
  return (
    <div className={`popup popup_type_info ${props.isOpened && "popup_opened"}`} ref={ref} onClick={handleOverlayClose}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={props.onClose}></button>
        <div className="popup__inner">
          {isSuccess ? (<>
            <img src={Success} className="popup__icon" alt="Успех" />
            <p className="popup__info">Вы успешно зарегистрировались!</p>
          </>) : (<><img src={Denied} className="popup__icon" alt="Ошибка" />
            <p className="popup__info">Что-то пошло не так!
Попробуйте ещё раз.</p></>)
          }
        </div>
      </div>
    </div>
  );
}
export default InfoTooltip;