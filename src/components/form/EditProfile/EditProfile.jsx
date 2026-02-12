import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setAbout(currentUser.about);
    }
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser({ name, about });
  }

  return (
    <form onSubmit={handleSubmit} className="popup__container">
      <h2 className="popup__subtitle">Editar Perfil</h2>

      <fieldset className="popup__content">
        <input
          type="text"
          className="popup__input popup__input_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__error"></span>

        <input
          type="text"
          className="popup__input popup__input_about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
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
