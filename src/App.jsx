import { NavContextProvider, NavContextConsumer } from "./contexts/NavContext.jsx";
import { CartContextProvider, CartContextConsumer } from "./contexts/CartContext.jsx";
import Navbar from "./components/Navbar.jsx";
import MobileNav from "./components/MobileNav.jsx";
import Product from "./components/Product.jsx";

export default function App() {
    return (
        <NavContextProvider>
            <NavContextConsumer>
                {() => {
                    return (
                        <CartContextProvider>
                            <CartContextConsumer>
                                {() => {
                                    return (
                                      <>
                                        <Navbar />
                                        <MobileNav />
                                        <Product />
                                      </>
                                    );
                                }}
                            </CartContextConsumer>
                        </CartContextProvider>
                    )
                }}
            </NavContextConsumer>
        </NavContextProvider>
    );
}
