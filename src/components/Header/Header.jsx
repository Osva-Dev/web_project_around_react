import logoHeader from "../../assets/images/content/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logoHeader} alt="Around the U.S." />
    </header>
  );
}

export default Header;
