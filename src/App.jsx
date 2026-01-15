import "./App.css";

function App() {
  return (
    <>
      <div className="page">
        <header className="header">
          <img className="header__logo" src="" alt="Around the U.S. logo" />
        </header>
        <main className="main">
          <section className="profile">
            <div className="profile__user">
              <div className="profile__picture-wrapper">
                <img
                  className="profile__picture"
                  src=""
                  alt="Profile Picture"
                />
              </div>
              <div className="profile__information">
                <div className="profile__custumise">
                  <h1 className="profile__name">Osvaldo Ochoa</h1>
                </div>
                <p className="profile__profession">Web Developer JR</p>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <p className="footer__copyright">&#169; 2024 Around The U.S.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
