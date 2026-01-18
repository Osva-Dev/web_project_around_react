import { useState } from "react";
import buttonEditInfo from "../../assets/images/icons/edit.png";
import buttonEditPhoto from "../../assets/images/icons/edit-2.svg";
import photo from "../../assets/images/vegeta.jpg";
import Popup from "./Popup";
import NewCard from "../form/NewCard/NewCard";

function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  const newCardPopup = {
    title: "Nuevo Lugar",
    children: <NewCard onAddCard={(card) => setCards([...cards, card])} />,
  };

  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
      {/* Render del popup */}
      {popup && (
        <Popup title={popup.title} onClose={handleClosePopup}>
          {popup.children}
        </Popup>
      )}

      <main className="main">
        {/* Sección Profile */}
        <section className="profile">
          <div className="profile__user">
            <div className="profile__picture-wrapper">
              <img
                className="profile__picture"
                src={photo}
                alt="Profile Picture"
              />
              <img
                className="profile__icon"
                src={buttonEditPhoto}
                alt="Button Edit"
              />
            </div>
            <div className="profile__information">
              <div className="profile__custumise">
                <h1 className="profile__name">Osvaldo Ochoa</h1>
                <button
                  type="button"
                  className="profile__button profile__button_edit"
                >
                  <img src={buttonEditInfo} alt="Edit Button" />
                </button>
              </div>
              <p className="profile__profession">Web Developer</p>
            </div>
          </div>

          {/* Botón + para agregar card */}
          <button
            type="button"
            className="profile__button profile__button_add"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            🞣
          </button>
        </section>

        {/* Sección Place */}
        <section className="place">
          {cards.map((card, index) => (
            <div className="place__card" key={index}>
              <img
                className="place__delete"
                src="./images/icons/trash.svg"
                alt="Eliminar"
                onClick={() => setCards(cards.filter((_, i) => i !== index))}
              />
              <img className="place__image" src={card.image} alt={card.name} />
              <div className="place__content">
                <h2 className="place__title">{card.name}</h2>
                <img
                  className={`place__like ${card.liked ? "place__like_active" : ""}`}
                  src="./images/icons/heart.svg"
                  alt="Like"
                  onClick={() => {
                    const newCards = [...cards];
                    newCards[index].liked = !newCards[index].liked;
                    setCards(newCards);
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
