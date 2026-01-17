export default function Popup({ title, children, onClose }) {
  return (
    <div className="popup popup_opened">
      <button
        type="button"
        className="popup__button popup__button_close"
        onClick={onClose}
      >
        &#x1F7A9;
      </button>

      <div className="popup__container">
        <h3 className="popup__subtitle">{title}</h3>
        <div className="popup__content">{children}</div>
      </div>
    </div>
  );
}
