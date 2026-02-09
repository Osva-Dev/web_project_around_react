import "../App.css";
import { useEffect, useState } from "react";

import api from "../utils/Api.js";

import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";

import CurrentUserContext from "../contexts/CurrentUserContext.js";

function App() {
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
