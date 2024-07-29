import React, { useState } from "react";

export const DownloadApplicationNotificationMobile = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      {/* <!-- Get the app for  mobile --> */}
      {/* <!-- Notification for the download app for the mobile user --> */}
      {visible && (
        <div className="app-banner">
          <div
            className="app-banner-close"
            onClick={() => setVisible(!visible)}
          >
            ❌
          </div>
          <div className="app-banner-content">
            <div className="app-banner-icon">
              <div className="app-banner-icon-square"></div>
            </div>
            <div className="app-banner-text">
              <div className="app-banner-title">Get the app</div>
              <div className="app-banner-subtitle">
                The fastest, easiest way
              </div>
            </div>
          </div>
          <button className="app-banner-button">USE APP</button>
        </div>
      )}
    </div>
  );
};
