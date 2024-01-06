import { useContext, useRef, useEffect } from "react";
import NavContext from "../contexts/NavContext.jsx";
import "../styles/_mobile-nav.scss";
import closeIcon from "../images/icon-close.svg";

export default function MobileNav() {
  const { navToggle, setNavToggle } = useContext(NavContext);
  const navContainerRef = useRef(null);

  useEffect(() => {
    if (navToggle && navContainerRef.current) {
      navContainerRef.current.focus();
    }
  }, [navToggle]);

  const navLinks = [
    { id: 1, name: "Collections" },
    { id: 2, name: "Men" },
    { id: 3, name: "Women" },
    { id: 4, name: "About" },
    { id: 5, name: "Contact" },
  ];

  return (
    <>
      {navToggle ? (
        <div
          className="mobile-nav-container hidden--desktop"
          role="dialog"
          aria-labelledby="mobileNavLabel"
          aria-modal="true"
          ref={navContainerRef}
          tabIndex="-1"
        >
          <div className="mobile-nav-container--visible flex flex-fd-c">
            <button
              className="mobile-nav__btn mobile-nav__btn--close hidden--desktop"
              onClick={() => setNavToggle(false)}
              aria-label="Close Menu"
            >
              <img src={closeIcon} alt="Close Menu" />
            </button>
            <nav className="mobile-nav" aria-label="Mobile Navigation">
              <ul className="mobile-nav__list">
                {navLinks.map((link) => (
                  <li className="mobile-nav__item" key={link.id}>
                    <a href="#" onClick={() => setNavToggle(false)}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
