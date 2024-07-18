import React from "react";

export const ShowMoreButton = ({ text }) => {
  return (
    <div class="show-more-button-div">
      <a href="#" class="show-more-link">
        {text}
      </a>
      <img
        class="show-more-right-arror-icon"
        src="./assets/icon/right_arrow_icon_home.png"
      />
    </div>
  );
};
