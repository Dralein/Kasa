import logoKasa from "../assets/Logo/kasa.svg"
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <img src={logoKasa} alt="Logo Kasa" />
      <nav>
        <ul>
          <NavLink to="/">
          <li>Accueil</li>
          </NavLink>
          <NavLink to="/about">
          <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
