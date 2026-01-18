export default function Popup({ title, children, onClose }) {
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

      {/* 👇 AQUÍ VA DIRECTO EL CONTENIDO */}
      {children}
    </div>
  );
}
