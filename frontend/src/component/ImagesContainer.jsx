import React, { useEffect, useState } from "react";

const hotelImages = [];

const ImagesContainer = () => {
  const [viewImages, setViewImages] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    for (let i = 1; i <= 9; i++) {
      if (hotelImages.length < 9)
        hotelImages.push(`./assets/images/bedroom${i}.jpg`);
    }
  }, []);

  const viewAllImages = () => {
    setViewImages(!viewImages);
  };

  function changeImage(val) {
    if (currentIndex + val === hotelImages.length) {
      setCurrentIndex(0);
    } else if (currentIndex + val === -1) {
      setCurrentIndex(hotelImages.length - 1);
    } else {
      setCurrentIndex(currentIndex + val);
    }
  }
  return (
    <div>
      <section
        className="gallery container-for-gallery"
        style={{ position: "relative" }}
      >
        <div className="gallery-first-image">
          <img src="./assets/images/bedroom1.jpg" alt="Bedroom" />
        </div>
        <div className="gallery-other-images">
          <img src="./assets/images/bedroom2.jpg" alt="Living Room" />
          <img src="./assets/images/bedroom3.jpg" alt="Kitchen" />
          <img src="./assets/images/bedroom4.jpg" alt="Bathroom" />
          <img src="./assets/images/bedroom5.jpg" alt="Entrance" />
        </div>
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
                {currentIndex + 1}/{hotelImages.length}
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
                  src={hotelImages[currentIndex]}
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
