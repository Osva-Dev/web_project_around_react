import { useRef, useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const avatarRef = useRef();
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <form
      id="form-profile-picture"
      className="popup__container popup__container--profile-picture"
      onSubmit={handleSubmit}
    >
      <h3 className="popup__subtitle popup__subtitle--profile-picture">
        Cambiar Foto de Perfil
      </h3>

      <fieldset className="popup__content">
        <input
          type="url"
          name="avatar"
          className="popup__input popup__input--profile-picture"
          placeholder="URL de la Imagen"
          required
          ref={avatarRef}
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
  );
}
