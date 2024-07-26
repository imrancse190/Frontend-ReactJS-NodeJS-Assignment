import React, { useEffect, useState } from "react";
import { Notification } from "./Notification";

export const SaveItemButton = () => {
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
      <div className="header-item-image" onClick={saveItemOnClick}>
        <img
          src={`./assets/icon/favorite_icon_header${
            itemSave ? "_save" : ""
          }.png`}
          id="saveitemImage"
          alt=""
        />
        <p>Save</p>
      </div>
      <div style={{ height: "30px" }}>
        <Notification text={notification} />
      </div>
    </div>
  );
};
