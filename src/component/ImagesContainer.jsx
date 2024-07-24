import React, { useEffect, useState } from "react";

const ImagesContainer = ({ images }) => {
  const [viewImages, setViewImages] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewAllImages = () => {
    setViewImages(!viewImages);
  };

  function changeImage(val) {
    if (currentIndex + val === images.length) {
      setCurrentIndex(0);
    } else if (currentIndex + val === -1) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex + val);
    }
  }

  if (!images) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <section
        className="gallery container-for-gallery"
        style={{ position: "relative" }}
      >
        <div className="gallery-first-image">
          <img src={`./assets/images/${images[4]}`} alt="Bedroom" />
        </div>
        {images && images.length > 0 && (
          <div className="gallery-other-images">
            {images.map((image, index) => (
              <img key={index} src={`./assets/images/${image}`} alt="" />
            ))}
          </div>
        )}
        <div
          className="gallery-show-all-photos"
          id="gallery-show-all-photos-id"
          onClick={viewAllImages}
        >
          <img
            src="./assets/icon/menu_all_icon_home.png"
            alt="Show all photos"
          />
          <p>{/* <!-- Show all images --> */}</p>
        </div>
      </section>

      {/* After the click of show all images */}
      <div>
        {viewImages && (
          <div
            id="show_all_images_one_by_one"
            className="show_all_images_one_by_one"
          >
            <div className="show_all_images_one_by_one-details">
              <div onClick={viewAllImages}>X Close</div>
              <div id="show-all-images-one-by-one-active-image-number">
                {currentIndex + 1}/{images.length}
              </div>
              <div className="show_all_images_one_by_one-share-save">
                <div>Share</div>
                <div>Save</div>
              </div>
            </div>
            <div className="show-all-images-image-container">
              <button
                className="nav-button prev"
                onClick={() => changeImage(-1)}
              >
                &lt;
              </button>
              <div className="image-container">
                <img
                  src={`./assets/images/${images[currentIndex]}`}
                  alt="Hotel room"
                  id="currentImage"
                />
              </div>
              <button
                className="nav-button next"
                onClick={() => changeImage(1)}
              >
                &gt;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagesContainer;
