import { useContext, useRef, useEffect } from "react";
import NavContext from "../contexts/NavContext.jsx";
import MobileNavCSS from "../styles/_mobile-nav.module.scss";
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
        <nav
          className={`${MobileNavCSS['mobile-nav-container']} hidden--desktop`}
          role="dialog"
          aria-labelledby="mobileNavLabel"
          aria-modal="true"
          ref={navContainerRef}
          tabIndex={navToggle ? "0" : "-1"}
        >
          <div className={`${MobileNavCSS['mobile-nav-container--visible']} flex flex-fd-c`}>
            <button
              className={`${MobileNavCSS['mobile-nav__btn']} ${MobileNavCSS['mobile-nav__btn--close']} hidden--desktop`}
              onClick={() => setNavToggle(false)}
              aria-label="Close Menu"
            >
              <img src={closeIcon} alt="Close Menu" />
            </button>
            <nav className={MobileNavCSS['mobile-nav']} aria-label="Mobile Navigation">
              <ul className={MobileNavCSS['mobile-nav__list']}>
                {navLinks.map((link) => (
                  <li className={MobileNavCSS['mobile-nav__item']} key={link.id}>
                    <a href="#" onClick={() => setNavToggle(false)}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </nav>
      ) : null}
    </>
  );
}
