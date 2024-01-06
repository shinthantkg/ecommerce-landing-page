import { useContext } from "react";
import CartContext from "../contexts/CartContext.jsx";
import "../styles/_cart.scss";
import cartIcon from "../images/icon-cart.svg";
import productThumbnail from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../images/icon-delete.svg";

export default function Cart() {
    const { items, setItems, cartButtonToggle, setCartButtonToggle } = useContext(CartContext);
    const itemPrice = 125;

    return (
        <>
            <button
                className="navbar__cart-btn navbar__cart-btn--active"
                type="button"
                aria-label="Shopping Cart"
                onClick={() => {
                 !cartButtonToggle ? setCartButtonToggle(true) : setCartButtonToggle(false);
                }}
            >
                <img src={cartIcon} alt="Shopping Cart"/>
            </button>
            {cartButtonToggle ?
                <div className="cart">
                    <div className="cart__label">
                        <h2 className="cart__label-title">Cart</h2>
                    </div>

                    {items === 0 ?
                        <div className={"cart__items flex flex-jc-c flex-ai-c"}>
                            <p>Your cart is empty.</p>
                        </div> :
                        <div className={"cart__items flex flex-fd-c flex-jc-c flex-ai-c"}>
                            <div className="cart-item flex">
                                <figure className="cart-item__info flex">
                                    <img className="cart-item__thumbnail" src={productThumbnail} alt="Fall Limited Edition Sneakers"/>
                                    <div className="cart-item__text-info flex flex-fd-c">
                                        <figcaption className="cart-item__name">Fall Limited Edition Sneakers</figcaption>
                                        <span className="cart-item__amount">{`$${itemPrice}.00 x ${items}`} <span className="cart-item__total-price">${itemPrice * items}.00</span></span>
                                    </div>
                                </figure>
                                <button className="cart-item__delete-btn" onClick={() => setItems(prevItems => prevItems - 1)}><img src={deleteIcon} alt="Delete item"/></button>
                            </div>
                            <button className="cart__checkout-btn">Checkout</button>
                        </div>
                    }
                </div>
                : null
            }
        </>
    )
}