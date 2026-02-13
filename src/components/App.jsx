import "../../src/blocks/page.css";
import { useEffect, useState } from "react";

import api from "../utils/Api.js";

import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";

import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.error("Error API:", err);
      });
  }, []);

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

  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  async function handleUpdateUser(data) {
    try {
      const newUserData = await api.setUserInfo(data);
      setCurrentUser(newUserData);
      handleClosePopup();
    } catch (error) {
      console.error("Error actualizando usuario:", error);
    }
  }

  async function handleUpdateAvatar(data) {
    try {
      const updatedUser = await api.updateAvatar(data.avatar);

      setCurrentUser(updatedUser);
      handleClosePopup();
    } catch (error) {
      console.error("Error actualizando avatar:", error);
    }
  }

  function handleCardLike(card) {
    api
      .toggleLike(card._id, card.isLiked)
      .then((updatedCard) => {
        setCards((prevCards) =>
          prevCards.map((c) => (c._id === card._id ? updatedCard : c)),
        );
      })
      .catch(console.error);
  }

  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);

      setCards((prevCards) => prevCards.filter((c) => c._id !== card._id));
    } catch (error) {
      console.error("Error al eliminar tarjeta:", error);
    }
  }
  function handleAddPlaceSubmit(data) {
    api
      .createCard(data)
      .then((newCard) => {
        setCards((prevCards) => [newCard, ...prevCards]);
        handleClosePopup();
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        <Header />
        <Main
          popup={popup}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
