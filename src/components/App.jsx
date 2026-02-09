import "../App.css";
import { useEffect } from "react";

import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";

import Api from "../utils/Api.js";

function App() {
  useEffect(() => {
    Api.getUserInfo()
      .then((data) => {
        console.log("✅ Usuario:", data);
      })
      .catch((err) => {
        console.error("Error API:", err);
      });
  }, []);

  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
