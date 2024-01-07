import { useState } from "react";
import ProductViewerMobileCSS from "../styles/_product-viewer-mobile.module.scss";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";
import prevIcon from "../images/icon-previous.svg";
import nextIcon from "../images/icon-next.svg";

export default function ProductViewerMobile() {
  const [currentImage, setCurrentImage] = useState(1);

  const images = [image1, image2, image3, image4];

  function slideLeft() {
    setCurrentImage((prevImage) => (prevImage === 1 ? 4 : prevImage - 1));
  }

  function slideRight() {
    setCurrentImage((prevImage) => (prevImage === 4 ? 1 : prevImage + 1));
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      slideLeft();
    } else if (event.key === "ArrowRight") {
      slideRight();
    }
  }

  return (
    <div className={ProductViewerMobileCSS["product-viewer-container"]} tabIndex={0} onKeyDown={handleKeyDown}>
      <img className={ProductViewerMobileCSS["product-viewer"]} src={images[currentImage - 1]} alt={`Product Image ${currentImage}`} />
      <button
        className={`${ProductViewerMobileCSS["product-viewer__btn"]} ${ProductViewerMobileCSS["product-viewer__btn--prev"]}`}
        onClick={slideLeft}
        aria-label="Go to previous image."
        tabIndex={0}
      >
        <img src={prevIcon} alt="Previous" />
      </button>
      <button
        className={`${ProductViewerMobileCSS["product-viewer__btn"]} ${ProductViewerMobileCSS["product-viewer__btn--next"]}`}
        onClick={slideRight}
        aria-label="Go to next image."
        tabIndex={0}
      >
        <img src={nextIcon} alt="Next" />
      </button>
    </div>
  );
}