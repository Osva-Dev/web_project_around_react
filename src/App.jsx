import "./App.css";

function App() {
  return (
    <div className="page">
      <header className="header">
        <img
          className="header__logo"
          src="./images/content/logo.svg"
          alt="Around the U.S."
        />
      </header>
      <main className="main">
        <section className="profile">
          <div className="profile__user">
            <div className="profile__picture-wrapper">
              <img className="profile__picture" src="" alt="Profile Picture" />
              <img
                className="profile__icon"
                src="./images/icons/edit-2.svg"
                alt="Button Edit"
              />
            </div>
            <div className="profile__information">
              <div className="profile__custumise">
                <h1 className="profile__name"></h1>
                <button
                  type="button"
                  className="profile__button profile__button_edit"
                >
                  <img src="./images/icons/edit.png" alt="Edit Button" />
                </button>
              </div>
              <p className="profile__profession"></p>
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
      <footer className="footer">
        <p className="footer__copyright">© 2024 Around The U.S.</p>
      </footer>
    </div>
  );
}

export default App;
