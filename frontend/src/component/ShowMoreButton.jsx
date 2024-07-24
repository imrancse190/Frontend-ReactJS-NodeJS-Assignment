import React from "react";

export const ShowMoreButton = ({ text }) => {
  return (
    <div className="show-more-button-div">
      <a href="#" className="show-more-link">
        {text}
      </a>
      <img
        alt=""
        className="show-more-right-arror-icon"
        src="./assets/icon/right_arrow_icon_home.png"
      />
    </div>
  );
};
