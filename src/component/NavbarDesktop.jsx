import React from "react";

const NavbarDesktop = () => {
  return (
    <div>
      <nav class="navbar border-bottom-navbar">
        <div class="navbar-content container-size">
          <div class="navbar-content-logo">
            <img src="./assets/icon/online-booking.png" alt="" />
          </div>
          <div onclick="searchItemShow()">
            <div
              class="stay-experiences-navbar hidden"
              id="stay-experiences-navbar-id"
            >
              <p>Close</p>
            </div>
            <div class="search-container" id="navbar-search-apartment">
              <input
                type="text"
                placeholder="Anywhere"
                class="search-input"
                id="navbar-search-anywhere"
              />

              <input
                type="text"
                placeholder="Any week"
                class="search-input"
                id="navbar-search-anyweek"
              />

              <input
                type="text"
                placeholder="Add guests"
                class="search-input"
                id="navbar-search-anyguests"
              />
              <button class="search-button">
                <img src="./assets/icon/search-icon-navbar.png" alt="" />
              </button>
            </div>
          </div>
          <div class="user-controls">
            <button class="globe-icon-button">
              <i class="globe-icon">
                <img src="./assets/icon/language_icon_navbar.png" alt="" />
              </i>
            </button>

            <button class="menu-icon-button">
              <img src="./assets/icon/menu_icon_navbar.png" alt="" />
              <img src="./assets/icon/account_circle_icon_navbar.png" alt="" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarDesktop;
