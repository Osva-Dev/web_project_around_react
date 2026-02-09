import "../App.css";
import { useEffect } from "react";

import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import Footer from "../components/Footer/Footer.jsx";

import api from "../utils/api.js";

function App() {
  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        console.log("✅ Usuario:", data);
      })
      .catch((err) => {
        console.error("❌ Error API:", err);
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
