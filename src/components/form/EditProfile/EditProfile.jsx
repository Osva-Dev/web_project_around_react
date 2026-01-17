export default function EditProfile() {
  return (
    <>
      <div class="popup">
        <button type="button" class="popup__button popup__button_close">
          &#x1F7A9;
        </button>
        <div className="popup popup--profile-picture">
          <button
            className="popup__button popup__button_close popup__button--close-profile-picture"
            type="button"
          >
            &#x1F7A9;
          </button>

          <div className="popup__container popup__container--profile-picture">
            <h3 className="popup__subtitle popup__subtitle--profile-picture">
              Cambiar Foto de Perfil
            </h3>

            <form
              id="form-profile-picture"
              className="popup__form popup__form--profile-picture"
            >
              <fieldset className="popup__content">
                <input
                  type="url"
                  name="avatar"
                  className="popup__input popup__input--profile-picture"
                  placeholder="URL de la Imagen"
                  required
                />
                <span className="popup__error popup__error--profile-picture"></span>
              </fieldset>

              <fieldset className="popup__content">
                <button
                  type="submit"
                  className="popup__button popup__button--save-profile-picture"
                >
                  Guardar
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
