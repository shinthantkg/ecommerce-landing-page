import PropTypes from "prop-types";
import "../styles/_product.scss";
import minusIcon from "../images/icon-minus.svg";
import plusIcon from "../images/icon-plus.svg";
import cartIcon from "../images/icon-cart.svg";

export default function AddRemoveButton({ selectedItems, onSelect, onUnselect, onAddToCart }) {
    return (
        <div className="flex">
            <div className="item-count-btn flex flex-jc-c flex-ai-c">
                <img className="item-count-btn__remove" onClick={onUnselect} src={minusIcon} alt="Remove item from cart."/>
                <span className="item-count">{selectedItems ? selectedItems : 0}</span>
                <img className="item-count-btn__add" onClick={onSelect}
                 src={plusIcon} alt="Add item from cart."/>
            </div>

            <button className="product__add-btn flex flex-ai-c" onClick={onAddToCart}><img className="product__add-btn-icon" src={cartIcon} alt="Add to cart."/> Add to cart</button>
        </div>
    );
}

AddRemoveButton.propTypes = {
    selectedItems: PropTypes.number.isRequired,
    onSelect: PropTypes.func.isRequired,
    onUnselect: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired
}
