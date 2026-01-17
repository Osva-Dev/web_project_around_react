import "../App.css";

import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import Popup from "../components/Main/Popup.jsx";
import Footer from "../components/Footer/Footer.jsx";

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Popup />
      <Footer />
    </div>
  );
}

export default App;
