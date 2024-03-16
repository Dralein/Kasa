import logoKasa from "../assets/kasa.svg"


const Header = () => {
  return (
    <header>
      <img src={logoKasa} alt="Logo Kasa" />
      <nav>
        <ul>
          <li>Accueil</li>
          <li>A propos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
