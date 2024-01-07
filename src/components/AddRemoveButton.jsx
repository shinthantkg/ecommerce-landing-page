import PropTypes from "prop-types";
import ProductCSS from "../styles/_product.module.scss";
import minusIcon from "../images/icon-minus.svg";
import plusIcon from "../images/icon-plus.svg";
import cartIcon from "../images/icon-cart.svg";

export default function AddRemoveButton({ selectedItems, onSelect, onUnselect, onAddToCart, stack }) {
  return (
    <div className={`flex ${stack ? "flex-fd-c" : ""}`} role="group" aria-labelledby="productControlsLabel">
      <div className={`${ProductCSS['item-count-btn']} flex ${stack ? "flex-jc-sb" : "flex-jc-c"} flex-ai-c`} role="group" aria-labelledby="itemCountLabel">
        <button
          className={ProductCSS['item-count-btn__remove']}
          aria-label="Remove item from cart"
          onClick={onUnselect}
          tabIndex={0}
        >
          <img src={minusIcon} alt="Decrease item quantity in cart." aria-hidden="true" />
        </button>
        <span className={ProductCSS['item-count']} aria-live="polite">
          {selectedItems ? selectedItems : 0}
        </span>
        <button
          className={ProductCSS['item-count-btn__add']}
          aria-label="Add item to cart"
          onClick={onSelect}
          tabIndex={0}
        >
          <img src={plusIcon} alt="Increase item quantity in cart." aria-hidden="true" />
        </button>
      </div>

      <button
        className={`${ProductCSS['product__add-btn']} flex ${stack ? "flex-jc-c" : ''} flex-ai-c`}
        onClick={onAddToCart}
        aria-label="Add to cart"
        tabIndex={0}
      >
        <img className={ProductCSS['product__add-btn-icon']} src={cartIcon} alt="Add to cart." aria-hidden="true" />
        Add to cart
      </button>
    </div>
  );
}

AddRemoveButton.propTypes = {
  selectedItems: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  onUnselect: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  stack: PropTypes.bool.isRequired
};
