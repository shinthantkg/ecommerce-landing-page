import { useContext, useState } from "react";
import NavContext from "../contexts/NavContext.jsx";
import Cart from "./Cart.jsx";
import NavbarCSS from "../styles/_navbar.module.scss";
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
    <header className={NavbarCSS['header']} role="banner">
      <nav className={`${NavbarCSS['navbar']} flex flex-jc-sb`} role="navigation">
        <div className={'flex flex-ai-c'}>
          <button
            onClick={() => setNavToggle(true)}
            className={`${NavbarCSS['mobile-nav__toggle-btn']} ${NavbarCSS['mobile-nav__btn--open']} hidden--desktop`}
            aria-label="Open Menu"
          >
            <img src={menuIcon} alt="Menu" />
          </button>

          <a className={NavbarCSS['navbar__logo']} href="/">
            <img className={'no-select'} src={logo} alt="Sneakers Logo" />
          </a>

          <ul className={`${NavbarCSS['navbar__list']} hidden--mobile`}>
            {navLinks.map((navLink) => (
              <li
                className={`${NavbarCSS['navbar__item']} no-select ${navLink.id === activeLink && NavbarCSS['navbar__item--active']}`}
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

        <div className={"flex flex-ai-c"}>
          <div>
            <Cart />
          </div>
          <a href="#">
            <img className={NavbarCSS['navbar__profile']} src={avatar} alt="Profile Picture"/>
          </a>
        </div>
      </nav>

      <hr className={`${NavbarCSS['header__divider']} hidden--mobile`} />
    </header>
  );
}
