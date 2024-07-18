import React, { useEffect, useState } from "react";
import { Notification } from "./Notification";

const HeaderTitleSaveShare = () => {
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

  const copyLinkButtonClick = () => {
    let currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        const timestamp = new Date().toLocaleTimeString();
        let text = `Link copied successfully at ${timestamp}`;
        setNotification(text);
      })
      .catch((err) => {
        const timestamp = new Date().toLocaleTimeString();
        let text = `Failed to copy link at ${timestamp}`;
        setNotification(text);
      });
  };

  const saveItemOnClick = () => {
    console.log("item save");
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
        class="header-items-all container-size"
        style={{ position: "relative" }}
      >
        <div class="header-items">
          <div class="header-items-left-arrow header-item-image">
            <img src="./assets/icon/arrow_back_left_icon_home.png" />
          </div>
          <div class="header-items-title">Comfy New Apt. in Pueblo Libre!</div>
          <div class="header-items-images">
            <div
              class="header-item-image"
              id="header-item-share-main-button"
              onClick={toggleViewShareModal}
            >
              <img src="./assets/icon/ios_share_icon_header.png" />
              <p>Share</p>
            </div>
            <div class="header-item-image" onClick={saveItemOnClick}>
              <img
                src={`./assets/icon/favorite_icon_header${
                  itemSave ? "_save" : ""
                }.png`}
                id="saveitemImage"
              />
              <p>Save</p>
            </div>
          </div>
        </div>

        {/* <!-- For mobile share save and back button --> */}
        <div class="header-icon-mobile">
          <div>
            <img src="./assets/icon/arrow_back_left_icon_home.png" />
          </div>
          <div>
            <div
              class="header-share-icon-mobile"
              onClick={toggleViewShareModal}
            >
              <img src="./assets/icon/ios_share_icon_header.png" />
            </div>
            <div
              onClick={saveItemOnClick}
              id="saveitemImageMobile"
              class="saveitemImageMobileClass"
            >
              <img
                src={`./assets/icon/favorite_icon_header${
                  itemSave ? "_save" : ""
                }.png`}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Share Modal */}
      <div>
        {viewShareModal && (
          <div class="" id="header-item-share-modal-all">
            <div class="header-item-share-modal">
              <div
                class="header-item-share-close"
                onClick={toggleViewShareModal}
              >
                &times;
              </div>
              <div class="header-item-share-title">Share this experience</div>
              <div class="header-item-share-images-details">
                <img
                  src="./assets/images/bedroom1.jpg"
                  alt="Home in New Castle"
                  class="header-item-share-image"
                />
                <div class="header-item-share-details">
                  <span>Home in New Castle</span>
                  <span>★ New · 4 bedrooms · 1 bed · 1 baths</span>
                </div>
              </div>
              <div class="header-item-share-buttons">
                <div
                  class="header-item-share-button"
                  onClick={copyLinkButtonClick}
                >
                  <img src="./assets/icon/copy_icon.png" /> Copy Link
                </div>
                <div class="header-item-share-button">
                  <img src="./assets/icon/mail_icon.png" /> Email
                </div>
                <div class="header-item-share-button">
                  <img src="./assets/icon/messages_icon.png" /> Messages
                </div>
                <div class="header-item-share-button">
                  <img src="./assets/icon/category_icon.png" /> WhatsApp
                </div>
                <div class="header-item-share-button">
                  <img src="./assets/icon/category_icon.png" /> Messenger
                </div>
                <div class="header-item-share-button">
                  <img src="./assets/icon/category_icon.png" /> Facebook
                </div>
                <div class="header-item-share-button">
                  <img src="./assets/icon/category_icon.png" /> Twitter
                </div>
                <div class="header-item-share-button">
                  <img src="./assets/icon/category_icon.png" /> Embed
                </div>
                <div class="header-item-share-button">
                  <img src="./assets/icon/see_more_icon.png" /> More options
                </div>
              </div>
            </div>
          </div>
        )}
        <Notification text={notification} />
      </div>
    </div>
  );
};

export default HeaderTitleSaveShare;
