import React, { useState, useEffect, useRef } from "react";
import { Notification } from "./Notification";

export const ShareModal = ({ toggleViewShareModal }) => {
  const [notification, setNotification] = useState("");
  const modalRef = useRef();

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

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      toggleViewShareModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="" id="header-item-share-modal-all">
        <div className="header-item-share-modal" ref={modalRef}>
          <div
            className="header-item-share-close"
            onClick={toggleViewShareModal}
          >
            &times;
          </div>
          <div className="header-item-share-title">Share this experience</div>
          <div className="header-item-share-images-details">
            <img
              src="./assets/images/bedroom1.jpg"
              alt="Home in New Castle"
              className="header-item-share-image"
            />
            <div className="header-item-share-details">
              <span>Home in New Castle</span>
              <span>★ New · 4 bedrooms · 1 bed · 1 baths</span>
            </div>
          </div>
          <div className="header-item-share-buttons">
            <div
              className="header-item-share-button"
              onClick={copyLinkButtonClick}
            >
              <img alt="" src="./assets/icon/copy_icon.png" /> Copy Link
            </div>
            <div className="header-item-share-button">
              <img alt="" src="./assets/icon/mail_icon.png" /> Email
            </div>
            <div className="header-item-share-button">
              <img alt="" src="./assets/icon/messages_icon.png" /> Messages
            </div>
            <div className="header-item-share-button">
              <img alt="" src="./assets/icon/category_icon.png" /> WhatsApp
            </div>
            <div className="header-item-share-button">
              <img alt="" src="./assets/icon/category_icon.png" /> Messenger
            </div>
            <div className="header-item-share-button">
              <img alt="" src="./assets/icon/category_icon.png" /> Facebook
            </div>
            <div className="header-item-share-button">
              <img alt="" src="./assets/icon/category_icon.png" /> Twitter
            </div>
            <div className="header-item-share-button">
              <img alt="" src="./assets/icon/category_icon.png" /> Embed
            </div>
            <div className="header-item-share-button">
              <img alt="" src="./assets/icon/see_more_icon.png" /> More options
            </div>
          </div>
        </div>
      </div>
      <Notification text={notification} />
    </div>
  );
};
