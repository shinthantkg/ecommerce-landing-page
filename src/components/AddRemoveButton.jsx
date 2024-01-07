import PropTypes from "prop-types";
import "../styles/_product.scss";
import minusIcon from "../images/icon-minus.svg";
import plusIcon from "../images/icon-plus.svg";
import cartIcon from "../images/icon-cart.svg";

export default function AddRemoveButton({ selectedItems, onSelect, onUnselect, onAddToCart }) {
  return (
    <div className="flex" role="group" aria-labelledby="productControlsLabel">  
      <div className="item-count-btn flex flex-jc-c flex-ai-c" role="group" aria-labelledby="itemCountLabel">
        <button
          className="item-count-btn__remove"
          aria-label="Remove item from cart"
          onClick={onUnselect}
          tabIndex={0}
        >
          <img src={minusIcon} alt="Decrease item quantity in cart." aria-hidden="true" />
        </button>
        <span className="item-count" aria-live="polite">
          {selectedItems ? selectedItems : 0}
        </span>
        <button
          className="item-count-btn__add"
          aria-label="Add item to cart"
          onClick={onSelect}
          tabIndex={0}
        >
          <img src={plusIcon} alt="Increase item quantity in cart." aria-hidden="true" />
        </button>
      </div>

      <button
        className="product__add-btn flex flex-ai-c"
        onClick={onAddToCart}
        aria-label="Add to cart"
        tabIndex={0}
      >
        <img className="product__add-btn-icon" src={cartIcon} alt="Add to cart." aria-hidden="true" />
        Add to cart
      </button>
    </div>
  );
}

AddRemoveButton.propTypes = {
  selectedItems: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  onUnselect: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired
};
