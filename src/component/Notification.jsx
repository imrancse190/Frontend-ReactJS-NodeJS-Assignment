import React, { useEffect, useState } from "react";

export const Notification = ({ text }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (text) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [text]);

  return (
    <div>
      {visible && (
        <div className="notification" id="notification">
          <span id="notification-message">{text}</span>
        </div>
      )}
    </div>
  );
};
