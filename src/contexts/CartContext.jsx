import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();
export default CartContext;

export function CartContextProvider({ children }) {
    const [items, setItems] = useState(0);
    const [cartButtonToggle, setCartButtonToggle] = useState(false);

    const value = {items, setItems, cartButtonToggle, setCartButtonToggle};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

CartContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const CartContextConsumer = CartContext.Consumer;
