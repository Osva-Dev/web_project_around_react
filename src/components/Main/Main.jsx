import { useState, useEffect, useContext } from "react";

import api from "../../utils/Api.js";

import buttonEditInfo from "../../assets/images/icons/edit.png";
import buttonEditPhoto from "../../assets/images/icons/edit-2.svg";

import Popup from "./Popup";
import NewCard from "../form/NewCard/NewCard.jsx";
import EditProfile from "../form/EditProfile/EditProfile.jsx";
import EditAvatar from "../form/EditAvatar/EditAvatar.jsx";
import Card from "../Card/Card.jsx";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

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

  const currentUser = useContext(CurrentUserContext);

  const handleCardLike = (card) => {
    api
      .toggleLike(card._id, card.isLiked)
      .then((updatedCard) => {
        setCards((prevCards) =>
          prevCards.map((c) => (c._id === card._id ? updatedCard : c)),
        );
      })
      .catch((err) => console.error("Error al dar like:", err));
  };

  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(() => {
    api
      .getCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.error("Error al cargar tarjetas:", err);
      });
  }, []);

  return (
    <>
      {popup && (
        <Popup title={popup.title} onClose={handleClosePopup}>
          {popup.children}
        </Popup>
      )}
      <ImagePopup card={selectedCard} onClose={() => setSelectedCard(null)} />
      <main className="main">
        <section className="profile">
          <div className="profile__user">
            <div className="profile__picture-wrapper">
              <img
                className="profile__picture"
                src={currentUser?.avatar}
                alt="Profile Picture"
              />
              <img
                className="profile__icon"
                src={buttonEditPhoto}
                alt="Edit Avatar"
                onClick={() => handleOpenPopup(editAvatarPopup)}
              />
            </div>
            <div className="profile__information">
              <div className="profile__custumise">
                <h1 className="profile__name">{currentUser?.name}</h1>
                <button
                  type="button"
                  className="profile__button profile__button_edit"
                  onClick={() => handleOpenPopup(editProfilePopup)}
                >
                  <img src={buttonEditInfo} alt="Edit Profile" />
                </button>
              </div>
              <p className="profile__profession">{currentUser?.about}</p>
            </div>
          </div>
          <button
            type="button"
            className="profile__button profile__button_add"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            🞣
          </button>
        </section>
        <section className="place">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onImageClick={() => setSelectedCard(card)}
              onCardLike={handleCardLike}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;
