import { useState, useEffect, useCallback } from "react";
import ProductViewerCSS from "../styles/_product-viewer.module.scss";
import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";
import closeIcon from "../images/icon-close.svg";
import prevIcon from "../images/icon-previous.svg";
import nextIcon from "../images/icon-next.svg";

export default function ProductViewer() {
  const [currentImage, setCurrentImage] = useState(1);
  const [isInLightBox, setIsInLightBox] = useState(false);

  const thumbnails = [
    { id: 1, src: thumbnail1 },
    { id: 2, src: thumbnail2 },
    { id: 3, src: thumbnail3 },
    { id: 4, src: thumbnail4 }
  ];

  function slideLeft() {
    setCurrentImage((prevImage) => (prevImage === 1 ? 4 : prevImage - 1));
  }

  function slideRight() {
    setCurrentImage((prevImage) => (prevImage === 4 ? 1 : prevImage + 1));
  }

  function handleArrowKeyPress(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.key === "ArrowLeft" ? slideLeft() : slideRight();
    } else if (event.key === "Escape") {
      isInLightBox && setIsInLightBox((prevValue) => !prevValue);
    }
  }

  const cachedHandleArrowKeyPress = useCallback(handleArrowKeyPress, [isInLightBox]);

  function Thumbnails(thumbnailsArray) {
    return thumbnailsArray.map((thumbnail) => (
      <button key={thumbnail.id} className={ProductViewerCSS['thumbnail-btn']} onClick={() => setCurrentImage(thumbnail.id)}>
        <img
          className={`${ProductViewerCSS['image']} ${ProductViewerCSS['image--thumbnail']} ${thumbnail.id === currentImage ? ProductViewerCSS['image--thumbnail-active'] : ""}`}
          src={thumbnail.src}
          alt={`Fall Limited Edition Sneakers Thumbnail ${thumbnail.id}`}
        />
      </button>
    ));
  }

  function Product() {
    return (
      <div className={"flex flex-fd-c"}>
        <div className={`${ProductViewerCSS['image']} ${ProductViewerCSS['image--current']} ${ProductViewerCSS[`image--${currentImage}`]} hover-darken`} onClick={() => setIsInLightBox(true)}>
        </div>
        <div className={`flex flex-jc-sb`}>{Thumbnails(thumbnails)}</div>
      </div>
    );
  }

  function LightBox() {
    return (
      <div className={`${ProductViewerCSS['lightbox']} flex flex-fd-c flex-jc-c flex-ai-c`} role="dialog" aria-labelledby={`${ProductViewerCSS['lightboxTitle']}`} aria-describedby={`${ProductViewerCSS['lightboxDescription']}`}>
        <img
          className={ProductViewerCSS['lightbox__close-btn']}
          src={closeIcon}
          alt="Close the lightbox view."
          onClick={() => setIsInLightBox((prevValue) => !prevValue)}
        />
        <div
          className={`${ProductViewerCSS['image']} ${ProductViewerCSS['image--current']} ${ProductViewerCSS[`image--${currentImage}`]}`}
          onClick={() => setIsInLightBox(true)}
          role="button"
          tabIndex={0}
        >
          <button className={`${ProductViewerCSS['lightbox__btn']} ${ProductViewerCSS['lightbox__btn--prev']}`} onClick={slideLeft}><img src={prevIcon} alt="Go back an image" /></button>
          <button className={`${ProductViewerCSS['lightbox__btn']} ${ProductViewerCSS['lightbox__btn--next']}`} onClick={slideRight}><img src={nextIcon} alt="Go to the next image" /></button>
        </div>
        <div className={`${ProductViewerCSS['lightbox__thumbnail-container']} flex flex-jc-se`}>{Thumbnails(thumbnails)}</div>
      </div>
    );
  }

  useEffect(() => {
    document.addEventListener("keydown", cachedHandleArrowKeyPress);

    return () => {
      document.removeEventListener("keydown", cachedHandleArrowKeyPress);
    };
  }, [cachedHandleArrowKeyPress]);

  return (
    <>
      {Product()}
      {isInLightBox && LightBox()}
    </>
  );
}
