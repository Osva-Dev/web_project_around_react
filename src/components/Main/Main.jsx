import { useState } from "react";
import buttonEditInfo from "../../assets/images/icons/edit.png";
import buttonEditPhoto from "../../assets/images/icons/edit-2.svg";
import photo from "../../assets/images/vegeta.jpg";
import Popup from "./Popup";
import NewCard from "../form/NewCard/NewCard";
import EditProfile from "../form/EditProfile/EditProfile";

function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

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

  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
      {/* Popup */}
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

              {/* Editar foto */}
              <img
                className="profile__icon"
                src={buttonEditPhoto}
                alt="Edit Photo"
                onClick={() => handleOpenPopup(editProfilePopup)}
              />
            </div>

            <div className="profile__information">
              <div className="profile__custumise">
                <h1 className="profile__name">Osvaldo Ochoa</h1>

                {/* Editar info */}
                <button
                  type="button"
                  className="profile__button profile__button_edit"
                  onClick={() => handleOpenPopup(editProfilePopup)}
                >
                  <img src={buttonEditInfo} alt="Edit Button" />
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
          {cards.map((card, index) => (
            <div className="place__card" key={index}>
              <img
                className="place__delete"
                src="./images/icons/trash.svg"
                alt="Eliminar"
                onClick={() =>
                  setCards((prev) => prev.filter((_, i) => i !== index))
                }
              />
              <img className="place__image" src={card.image} alt={card.name} />
              <div className="place__content">
                <h2 className="place__title">{card.name}</h2>
                <img
                  className={`place__like ${
                    card.liked ? "place__like_active" : ""
                  }`}
                  src="./images/icons/heart.svg"
                  alt="Like"
                  onClick={() => {
                    setCards((prev) =>
                      prev.map((c, i) =>
                        i === index ? { ...c, liked: !c.liked } : c,
                      ),
                    );
                  }}
                />
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
