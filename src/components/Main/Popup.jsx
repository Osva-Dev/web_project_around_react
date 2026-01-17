export default function Popup(props) {
  const { title, children } = props;
  return (
    <>
      <div className="popup">
        <button type="button" className="popup__button popup__button_close">
          &#x1F7A9;
        </button>
        <div className="popup__paragraph-content">
          <p className="popup__paragraph">{title}</p>
          {children}
        </div>
      </div>
    </>
  );
}
