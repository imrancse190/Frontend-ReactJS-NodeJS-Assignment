import React, { useState } from "react";

export const DownloadApplicationNotificationMobile = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      {/* <!-- Get the app for  mobile --> */}
      {/* <!-- Notification for the download app for the mobile user --> */}
      {visible && (
        <div class="app-banner">
          <div class="app-banner-close" onClick={() => setVisible(!visible)}>
            ❌
          </div>
          <div class="app-banner-content">
            <div class="app-banner-icon">
              <div class="app-banner-icon-square"></div>
            </div>
            <div class="app-banner-text">
              <div class="app-banner-title">Get the app</div>
              <div class="app-banner-subtitle">The fastest, easiest way</div>
            </div>
          </div>
          <button class="app-banner-button">USE APP</button>
        </div>
      )}
    </div>
  );
};
