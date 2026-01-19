import { useState } from "react";

import buttonEditInfo from "../../assets/images/icons/edit.png";
import buttonEditPhoto from "../../assets/images/icons/edit-2.svg";
import photo from "../../assets/images/vegeta.jpg";

import Popup from "./Popup";
import NewCard from "../form/NewCard/NewCard.jsx";
import EditProfile from "../form/EditProfile/EditProfile.jsx";
import EditAvatar from "../form/EditAvatar/EditAvatar.jsx";
import Card from "../Card/Card.jsx";

/* ✅ DATOS FICTICIOS (SPRINT) */
const initialCards = [
  {
    isLiked: false,
    _id: "1",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    isLiked: false,
    _id: "2",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
];

console.log(initialCards);

function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState(initialCards);

  const newCardPopup = {
    title: "Nuevo Lugar",
    children: (
      <NewCard onAddCard={(card) => setCards((prev) => [...prev, card])} />
    ),
  };

  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Cambiar Foto de Perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
      {popup && (
        <Popup title={popup.title} onClose={handleClosePopup}>
          {popup.children}
        </Popup>
      )}

      <main className="main">
        {/* Profile */}
        <section className="profile">
          <div className="profile__user">
            <div className="profile__picture-wrapper">
              <img
                className="profile__picture"
                src={photo}
                alt="Profile Picture"
              />

              {/* Editar avatar */}
              <img
                className="profile__icon"
                src={buttonEditPhoto}
                alt="Edit Avatar"
                onClick={() => handleOpenPopup(editAvatarPopup)}
              />
            </div>

            <div className="profile__information">
              <div className="profile__custumise">
                <h1 className="profile__name">Osvaldo Ochoa</h1>

                {/* Editar perfil */}
                <button
                  type="button"
                  className="profile__button profile__button_edit"
                  onClick={() => handleOpenPopup(editProfilePopup)}
                >
                  <img src={buttonEditInfo} alt="Edit Profile" />
                </button>
              </div>

              <p className="profile__profession">Web Developer</p>
            </div>
          </div>

          {/* Agregar card */}
          <button
            type="button"
            className="profile__button profile__button_add"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            🞣
          </button>
        </section>

        {/* Cards */}
        <section className="place">
          {cards.map((card) => (
            <Card key={card._id} card={card} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
