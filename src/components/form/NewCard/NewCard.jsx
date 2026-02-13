import { useState } from "react";

export default function NewCard({ onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlaceSubmit({
      name: name,
      link: link,
    });
    setName("");
    setLink("");
  }

  return (
    <form className="popup__container" noValidate onSubmit={handleSubmit}>
      <h2 className="popup__subtitle">Nuevo Lugar</h2>

      <fieldset className="popup__content">
        <input
          type="text"
          className="popup__input popup__input_name"
          placeholder="Nombre del Lugar"
          required
          minLength="2"
          maxLength="40"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="popup__error"></span>

        <input
          type="url"
          className="popup__input popup__input_about"
          placeholder="URL de la imagen"
          required
          value={link}
          onChange={(e) => setLink(e.target.value)}
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
