import { useContext, useState } from "react";
import NavContext from "../contexts/NavContext.jsx"
import Cart from "./Cart.jsx";
import "../styles/_navbar.scss";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import menuIcon from "../images/icon-menu.svg";

export default function Navbar() {
  const { setNavToggle } = useContext(NavContext);
  const [activeLink, setActiveLink] = useState(null);

  const navLinks = [
    { id: 1, name: "Collections" },
    { id: 2, name: "Men" },
    { id: 3, name: "Women" },
    { id: 4, name: "About" },
    { id: 5, name: "Contact" },
  ];

  return (
    <header className="header" role="banner">
      <nav className="navbar flex flex-jc-sb" role="navigation">
        <div className="flex flex-ai-c">
          <button
            onClick={() => setNavToggle(true)}
            className="mobile-nav__toggle-btn mobile-nav__btn--open hidden--desktop"
            aria-label="Open Menu"
          >
            <img src={menuIcon} alt="Menu" />
          </button>

          <a className="navbar__logo" href="/">
            <img className="no-select" src={logo} alt="Sneakers Logo" />
          </a>

          <ul className="navbar__list hidden--mobile">
            {navLinks.map((navLink) => (
              <li
                className={`navbar__item no-select ${navLink.id === activeLink && "navbar__item--active"}`}
                key={navLink.id}
                onClick={() => setActiveLink(navLink.id)}
                aria-current={navLink.id === activeLink}
                tabIndex="0"
              >
                <a>{navLink.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-ai-c">
          <div>
            <Cart />
          </div>
          <img className="navbar__profile no-select" src={avatar} alt="Profile Picture" />
        </div>
      </nav>

      <hr className="header__divider hidden--mobile" />
    </header>
  );
}