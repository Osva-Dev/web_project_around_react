export default function ImagePopup({ card, onClose }) {
  if (!card) return null;

  return (
    <div className="popup popup_opened">
      <button
        type="button"
        className="popup__button popup__button_close"
        aria-label="Close popup"
        onClick={onClose}
      >
        &#x1F7A9;
      </button>

      <div className="popup__images">
        <div className="popup__content-image">
          <img className="popup__image" src={card.link} alt={card.name} />
        </div>

        <div className="popup__paragraph-content">
          <p className="popup__paragraph">{card.name}</p>
        </div>
      </div>
    </div>
  );
}
