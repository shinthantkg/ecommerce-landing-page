import { useContext } from "react";
import NavContext from "../contexts/NavContext.jsx";
import "../styles/_mobile-nav.scss";
import closeIcon from "../images/icon-close.svg";

export default function MobileNav() {
    const { navToggle, setNavToggle } = useContext(NavContext);

    const navLinks = [
        { id: 1, name: "Collections" },
        { id: 2, name: "Men" },
        { id: 3, name: "Women" },
        { id: 4, name: "About" },
        { id: 5, name: "Contact" }
    ]

    return (
        <>
            {navToggle ?
                <div className="mobile-nav-container hidden--desktop">
                    <div className="mobile-nav-container--visible flex flex-fd-c">
                        <button className="mobile-nav__btn mobile-nav__btn--close hidden--desktop">
                            <img onClick={() => setNavToggle(false)} src={closeIcon} alt="Menu"/>
                        </button>
                        <nav className="mobile-nav">
                            <ul className="mobile-nav__list">
                                {navLinks.map(link => <li className="mobile-nav__item" key={link.id}><a>{link.name}</a>
                                </li>)}
                            </ul>
                        </nav>
                    </div>
                </div>
                : null
            }
        </>
    )
}