export default function NewCard() {
  return (
    <form className="popup__container" noValidate>
      <h2 className="popup__subtitle">Nuevo Lugar</h2>

      <fieldset className="popup__content">
        <input
          type="text"
          className="popup__input popup__input_name"
          placeholder="Nombre del Lugar"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__error"></span>

        <input
          type="url"
          className="popup__input popup__input_about"
          placeholder="URL de la imagen"
          required
        />
        <span className="popup__error"></span>
      </fieldset>

      <fieldset className="popup__content">
        <button type="submit" className="popup__button popup__button_save">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
