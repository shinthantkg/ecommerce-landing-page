import { useContext, useState, useEffect } from "react";
import CartContext from "../contexts/CartContext.jsx";
import ProductViewer from "./ProductViewer";
import ProductViewerMobile from "./ProductViewerMobile.jsx";
import AddRemoveButton from "./AddRemoveButton.jsx";
import ProductCSS from "../styles/_product.module.scss";

export default function Product() {
  const { setItems } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1000);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function selectItem() {
    setSelectedItems((prevItems) => prevItems + 1);
  }

  function unselectItem() {
    setSelectedItems((prevItems) => (prevItems > 0 ? prevItems - 1 : prevItems));
  }

  function addItems() {
    setItems((prevItems) => prevItems + selectedItems);
    setSelectedItems(0);
  }

  return (
    <>
      <main className={ProductCSS['main']} role="main">
        {isMobile ? (
          <ProductViewerMobile />
        ) : null
        }
        <div className={`flex ${isMobile ? "flex-fd-c" : "flex-jc-c"}`}>
          {!isMobile ? (
            <ProductViewer />
          ) : null
          }

          <section className={ProductCSS['product']} aria-labelledby={ProductCSS['productTitle']}>
            <span className={ProductCSS['product__company']}>Sneaker Company</span>
            <h1 className={ProductCSS['product__title']} id={ProductCSS['productTitle']}>
              Fall Limited Edition Sneakers
            </h1>
            <p className={ProductCSS['product__desc']}>
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
              they&apos;ll withstand everything the weather can offer.
            </p>
            <div className={`${ProductCSS['product__pricing']} flex ${isMobile ? "flex-jc-sb" : "flex-fd-c"}`}>
              <div className={`flex flex-ai-c`}>
                <span className={ProductCSS['product__price']}>$125.00</span>
                <span className={ProductCSS['product__discount']}>50%</span>
              </div>
              <span className={ProductCSS['product__original-price']}>
                <del>$250.00</del>
              </span>
            </div>
            <AddRemoveButton selectedItems={selectedItems} onSelect={selectItem} onUnselect={unselectItem} onAddToCart={addItems} stack={isMobile} />
          </section>
        </div>
      </main>
    </>
  );
}
