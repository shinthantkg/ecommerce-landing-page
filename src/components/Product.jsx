import { useContext, useState } from "react";
import CartContext from "../contexts/CartContext.jsx";
import ProductViewer from "./ProductViewer";
import AddRemoveButton from "./AddRemoveButton.jsx";
import "../styles/_product.scss";

export default function Product() {
  const { setItems } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState(0);

  function selectItem() {
    setSelectedItems((prevItems) => prevItems + 1);
  }

  function unselectItem() {
    setSelectedItems((prevItems) => prevItems > 0 ? prevItems - 1 : prevItems);
  }

  function addItems() {
    setItems((prevItems) => prevItems + selectedItems);
    setSelectedItems(0);
  }

  return (
    <main className="main" role="main">
      <div className="flex flex-jc-c">
        <ProductViewer/>

        <article className="product flex flex-fd-c">
          <span className="product__company">Sneaker Company</span>

          <h1 className="product__title">Fall Limited Edition Sneakers</h1>

          <p className="product__desc">
            These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they&apos;ll withstand everything the weather can offer.
          </p>

          <div className="flex flex-ai-c">
            <span className="product__price">$125.00</span>
            <span className="product__discount">50%</span>
          </div>

          <span className="product__original-price"><del>$250.00</del></span>

          <AddRemoveButton selectedItems={selectedItems} onSelect={selectItem} onUnselect={unselectItem} onAddToCart={addItems} />
        </article>
      </div>
    </main>
  );
}