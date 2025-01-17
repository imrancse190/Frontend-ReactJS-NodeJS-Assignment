import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShareModal } from "./ShareModal";

export const HomePageItemCard = ({ data }) => {
  const [viewShareModal, setViewShareModal] = useState(false);

  //   For spliting address
  const addressParts = data.address.split(",");
  const location = addressParts.slice(-2).join(", ");
  //   For spliting host name
  const hostParts = data.host_information.split(",");
  const host_info = hostParts.slice(0, 1).join(", ");
  const toggleViewShareModal = () => {
    setViewShareModal(!viewShareModal);
  };
  function detailsPageClick() {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      {viewShareModal && (
        <ShareModal toggleViewShareModal={toggleViewShareModal} />
      )}
      <div className="item-card-container">
        <div className="item-card-image-wrapper">
          <img
            src="./assets/icon/ios_share_icon_header.png"
            alt=""
            id="item-card-share-icon"
            onClick={toggleViewShareModal}
          />

          <img
            src={data.images[0]}
            alt="Prince's Purple Rain house"
            className="item-card-image"
          />
        </div>
        <Link
          to={`/${data.slug}`}
          className="home-page-item-card"
          onClick={() => detailsPageClick()}
        >
          <div className="item-card-content">
            <div className="home-page-item-card-title">
              <div className="item-card-title">{location}</div>
              <div>▶</div>
            </div>

            <p className="item-card-host">Hosted by {host_info}</p>
            <p className="item-card-date">Now available!</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
