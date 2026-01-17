import editButton from "../../assets/images/icons/edit.png";
import editButton2 from "../../assets/images/icons/edit-2.svg";
import { useState } from "react";
import Popup from "./Popup";
import vegeta from "../../assets/images/vegeta.jpg";

function Main() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__user">
          <div className="profile__picture-wrapper">
            <img className="profile__picture" src={vegeta} alt="Profile" />
            <img
              className="profile__icon"
              src={editButton2}
              alt="Edit avatar"
            />
          </div>

          <div className="profile__information">
            <div className="profile__custumise">
              <h1 className="profile__name">Osvaldo Ochoa</h1>
              <button className="profile__button profile__button_edit">
                <img src={editButton} alt="Edit profile" />
              </button>
            </div>
            <p className="profile__profession">Web Developer JR</p>
          </div>
        </div>

        <div className="profile__add">
          <button
            type="button"
            className="profile__button profile__button_add"
            onClick={() => setIsPopupOpen(true)}
          >
            🞣
          </button>
        </div>
      </section>

      <section className="place"></section>

      {isPopupOpen && (
        <Popup title="Nuevo lugar" onClose={() => setIsPopupOpen(false)}>
          <p style={{ textAlign: "center" }}>Contenido temporal del popup</p>
        </Popup>
      )}
    </main>
  );
}

export default Main;
