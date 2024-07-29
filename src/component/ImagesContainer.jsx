import React, { useState } from "react";
import { ShimmerLoaderHome } from "./ShimmerLoaderHome";
import { SaveItemButton } from "./SaveItemButton";
import { ShareModal } from "./ShareModal";
import { Link } from "react-router-dom";

const ImagesContainer = ({ images }) => {
  const [viewImages, setViewImages] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewShareModal, setViewShareModal] = useState(false);

  const viewAllImages = () => {
    setViewImages(!viewImages);
    window.scrollTo(0, 0);
  };
  const toggleViewShareModal = () => {
    setViewShareModal(!viewShareModal);
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
    return (
      <div className="container-size">
        <ShimmerLoaderHome />
      </div>
    );
  }
  return (
    <div>
      <section
        className="gallery container-for-gallery"
        style={{ position: "relative" }}
      >
        <div className="gallery-first-image">
          <img src={images[0]} alt="Bedroom" />
        </div>
        {images && images.length > 0 && (
          <div className="gallery-other-images">
            {images.map((image, index) => (
              <img key={index} src={image} alt="" />
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
              <div onClick={viewAllImages} style={{ display: "flex" }}>
                <img
                  src="./assets/icon/minimize_icon.png"
                  alt=""
                  width="30"
                  height="30"
                  style={{ paddingTop: "15px" }}
                />
                <h3>Close</h3>
              </div>
              <div id="show-all-images-one-by-one-active-image-number">
                <h3>
                  {currentIndex + 1}/{images.length}
                </h3>
              </div>
              <div className="show_all_images_one_by_one-share-save">
                <h4
                  style={{ paddingRight: "20px", cursor: "pointer" }}
                  onClick={toggleViewShareModal}
                >
                  ↪️ Share
                </h4>

                <div style={{ marginTop: "5px" }}>
                  <SaveItemButton />
                </div>
              </div>
            </div>
            <div className="show-all-images-image-container">
              <button
                className="nav-button prev"
                onClick={() => changeImage(-1)}
              >
                <img
                  src="./assets/icon/move_left_icon.png"
                  alt=""
                  className="show-all-images-img-size "
                />
              </button>
              <div className="image-container">
                <img
                  src={images[currentIndex]}
                  alt="Hotel room"
                  id="currentImage"
                />
              </div>
              <button
                className="nav-button next"
                onClick={() => changeImage(1)}
              >
                <img
                  src="./assets/icon/move_right_icon.png"
                  alt=""
                  className="show-all-images-img-size "
                />
              </button>
            </div>
            <div>
              {viewShareModal && (
                <ShareModal toggleViewShareModal={toggleViewShareModal} />
              )}
            </div>
          </div>
        )}
      </div>
      {/* Share Modal */}
    </div>
  );
};

export default ImagesContainer;
