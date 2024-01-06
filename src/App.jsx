import { NavContextProvider, NavContextConsumer } from "./contexts/NavContext.jsx";
import Navbar from "./components/Navbar.jsx";
import MobileNav from "./components/MobileNav.jsx";

export default function App() {
    return (
        <>
            <NavContextProvider>
                <NavContextConsumer>
                    {() => {
                        return (
                            <>
                                <Navbar />
                                <MobileNav />
                            </>
                        )
                    }}
                </NavContextConsumer>
            </NavContextProvider>
        </>
    );
}
