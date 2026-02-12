import "../App.css";
import { useEffect, useState } from "react";

import api from "../utils/Api.js";

import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";

import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

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
      handleClosePopup(); // 🔥 cierra automáticamente
    } catch (error) {
      console.error("Error actualizando usuario:", error);
    }
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
      <div className="page">
        <Header />
        <Main
          popup={popup}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
