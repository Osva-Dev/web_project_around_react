export default function NewCard() {
  return (
    <>
      <div class="popup">
        <button type="button" class="popup__button popup__button_close">
          &#x1F7A9;
        </button>
        <form id="form-place" className="popup__container">
          <h2 className="popup__subtitle">Nuevo Lugar</h2>
          <fieldset className="popup__content">
            <input
              type="text"
              className="popup__input popup__input_name"
              placeholder="Nombre del Lugar"
              required
              minlength="2"
              maxlength="40"
            />
            <span className="place-name-error popup__error"></span>
            <input
              type="url"
              className="popup__input popup__input_about"
              placeholder="URL de la imagen"
              required
            />
            <span className="place-url-error popup__error"></span>
          </fieldset>
          <fieldset className="popup__content">
            <button type="submit" className="popup__button popup__button_save">
              Guardar
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}
