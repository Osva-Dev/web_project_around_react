export default function EditProfile() {
  return (
    <form id="form-profile" className="popup__container">
      <h2 className="popup__subtitle">Editar Perfil</h2>

      <fieldset className="popup__content">
        <input
          type="text"
          className="popup__input popup__input_name"
          placeholder="Nombre"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="name-error popup__error"></span>
        <input
          type="text"
          className="popup__input popup__input_about"
          placeholder="Acerca de mí"
          required
        />
        <span className="about-error popup__error"></span>
      </fieldset>
      <fieldset className="popup__content">
        <button type="submit" className="popup__button popup__button_save">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
