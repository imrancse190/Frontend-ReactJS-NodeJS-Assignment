import React, { useEffect, useState } from "react";
import { ShareModal } from "./ShareModal";
import { ShimmerLoaderText } from "./ShimmerLoaderText";
import { SaveItemButton } from "./SaveItemButton";
import { Link } from "react-router-dom";

const HeaderTitleSaveShare = ({ title }) => {
  const [viewShareModal, setViewShareModal] = useState(false);
  const [notification, setNotification] = useState("");
  const [itemSave, setItemSave] = useState(false);

  const checkItemSaveOrNot = () => {
    let save = localStorage.getItem("saveItem");

    if (save === "true") {
      setItemSave(true);
    }
  };

  useEffect(() => {
    checkItemSaveOrNot();
  }, []);
  const toggleViewShareModal = () => {
    setViewShareModal(!viewShareModal);
  };

  const saveItemOnClick = () => {
    let save = localStorage.getItem("saveItem");

    save = save === "true";

    if (save) {
      localStorage.removeItem("saveItem");
      setItemSave(false);

      const timestamp = new Date().toLocaleTimeString();
      let text = `Remove item successfully at ${timestamp}`;
      setNotification(text);
    } else {
      localStorage.setItem("saveItem", true);
      setItemSave(true);

      const timestamp = new Date().toLocaleTimeString();
      let text = `Save item successfully at ${timestamp}`;
      setNotification(text);
    }
  };

  return (
    <div>
      <header
        className="header-items-all container-size"
        style={{ position: "relative" }}
      >
        <div className="header-items">
          <div className="header-items-left-arrow">
            <img src="./assets/icon/arrow_back_left_icon_home.png" alt="" />
          </div>
          <div className="header-items-title">
            {title ? title : <ShimmerLoaderText />}
          </div>
          <div className="header-items-images">
            <div
              className="header-item-image"
              id="header-item-share-main-button"
              onClick={toggleViewShareModal}
            >
              <img src="./assets/icon/ios_share_icon_header.png" alt="" />
              <p>Share</p>
            </div>
            <SaveItemButton />
          </div>
        </div>

        {/* <!-- For mobile share save and back button --> */}
        <div className="header-icon-mobile">
          <div>
            <Link to="/">
              <img alt="" src="./assets/icon/arrow_back_left_icon_home.png" />
            </Link>
          </div>
          <div>
            <div
              className="header-share-icon-mobile"
              onClick={toggleViewShareModal}
            >
              <img alt="" src="./assets/icon/ios_share_icon_header.png" />
            </div>
            <div
              onClick={saveItemOnClick}
              id="saveitemImageMobile"
              className="saveitemImageMobileClass"
            >
              <img
                src={`./assets/icon/favorite_icon_header${
                  itemSave ? "_save" : ""
                }.png`}
                alt=""
              />
            </div>
          </div>
        </div>
      </header>

      {/* Share Modal */}
      <div>
        {viewShareModal && (
          <ShareModal toggleViewShareModal={toggleViewShareModal} />
        )}
      </div>
    </div>
  );
};

export default HeaderTitleSaveShare;
