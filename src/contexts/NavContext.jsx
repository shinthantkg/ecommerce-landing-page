import { createContext, useState } from "react";
import PropTypes from "prop-types";

const NavContext = createContext();
export default NavContext;

export function NavContextProvider({ children }) {
    const [navToggle, setNavToggle] = useState(false);

    const value = { navToggle, setNavToggle };

    return <NavContext.Provider value={value}>{children}</NavContext.Provider>
}

NavContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const NavContextConsumer = NavContext.Consumer;
