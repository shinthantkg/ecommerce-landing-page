import { useState, useEffect, useCallback } from "react";
import "../styles/_product-viewer.scss";
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
    setCurrentImage(prevImage => {
      return prevImage === 1 ? 4 : prevImage - 1;
    })
  }

  function slideRight() {
    setCurrentImage(prevImage => {
      return prevImage === 4 ? 1 : prevImage + 1;
    })
  }

  function handleArrowKeyPress(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.key === "ArrowLeft" ? slideLeft() : slideRight();
    }
  }

  const cachedHandleArrowKeyPress = useCallback(handleArrowKeyPress, [setCurrentImage])

  function renderThumbnails(thumbnailsArray) {
    return thumbnailsArray.map(thumbnail => {
      return (
        <img
          key={thumbnail.id}
          className={`image image--thumbnail ${thumbnail.id === currentImage ? "image--thumbnail-active" : ""}`}
          onClick={() => setCurrentImage(thumbnail.id)}
          src={thumbnail.src}
          alt="Fall Limited Edition Sneakers Thumbnail"
        />
      );
    });
  }

  function renderProduct() {
    return (
      <div className="flex flex-fd-c">
        <div className={`image image--current image--${currentImage}`} onClick={() => setIsInLightBox(true)}>
        </div>

        <div className="flex flex-jc-sb">{renderThumbnails(thumbnails)}</div>
      </div>
    );
  }

  function renderLightBox() {
    return (
      <div className="lightbox flex flex-fd-c flex-jc-c flex-ai-c">
        <img className="lightbox__close-btn" src={closeIcon} alt="Close the lightbox view." onClick={() => setIsInLightBox(prevValue => !prevValue)} />
        <div className={`image image--current image--${currentImage}`} onClick={() => setIsInLightBox(true)}>
          <button className="lightbox__btn lightbox__btn--prev" onClick={slideLeft}><img src={prevIcon} alt="Go back an image" /></button>
          <button className="lightbox__btn lightbox__btn--next" onClick={slideRight}><img src={nextIcon} alt="Go to the next image" /></button>
        </div>
        <div className="lightbox__thumbnail-container flex flex-jc-se">{renderThumbnails(thumbnails)}</div>
      </div>
    )
  }

  useEffect(() => {
    document.addEventListener("keydown", cachedHandleArrowKeyPress);

    return () => {
      document.removeEventListener("keydown", cachedHandleArrowKeyPress);
    };
  }, [cachedHandleArrowKeyPress]);

  return (
    <>
      {isInLightBox ?
        <>
          {renderProduct()}
          {renderLightBox()}
        </>
        : renderProduct()
      }
    </>
  );
}
