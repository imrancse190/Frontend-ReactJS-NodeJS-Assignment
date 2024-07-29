import React from "react";
import { Link } from "react-router-dom";

export const ShowMoreButton = ({ text }) => {
  return (
    <div className="show-more-button-div">
      <Link href="#" className="show-more-link">
        {text}
      </Link>
      <img
        alt=""
        className="show-more-right-arror-icon"
        src="./assets/icon/right_arrow_icon_home.png"
      />
    </div>
  );
};
