import logoKasa from "../assets/Logo/kasa.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={logoKasa} alt="Logo Kasa" />
      <nav>
        <ul>
        <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
