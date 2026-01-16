import editButton from "../../assets/images/icons/edit.png";
import editButton2 from "../../assets/images/icons/edit-2.svg";

function Main() {
  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__user">
            <div className="profile__picture-wrapper">
              <img className="profile__picture" src="" alt="Profile Picture" />
              <img
                className="profile__icon"
                src={editButton2}
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
                  <img src={editButton} alt="Edit Button" />
                </button>
              </div>
              <p className="profile__profession">Web Developer JR</p>
            </div>
          </div>
          <div className="profile__add">
            <button
              type="button"
              className="profile__button profile__button_add"
            >
              🞣
            </button>
          </div>
        </section>
        <section className="place"></section>
      </main>
    </>
  );
}

export default Main;
