import React from "react";

export const NavbarSearchBar = () => {
  return (
    <div>
      <div className="navbar-search-stay-experiences">
        <div>Stay</div>
        <div>Experiences</div>
      </div>
      <div>
        <div className="navbar-search-box">
          <div id="navbar-search-where">
            <div class="bold-text">Where</div>
            <div class="light-text">Search destinaitons</div>
          </div>
          <div id="navbar-search-check-in">
            <div class="bold-text">Check in</div>
            <div class="light-text">Add dates</div>
          </div>
          <div id="navbar-search-check-out">
            <div class="bold-text">Check out</div>
            <div class="light-text">Add dates</div>
          </div>
          <div id="navbar-search-guest-search-button">
            <div>
              <div class="bold-text">Who</div>
              <div>Add guests</div>
            </div>
            <div className="navbar-search-search-button">
              <img src="./assets/icon/search-icon-navbar.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
