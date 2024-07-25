import React from "react";
import { Link } from "react-router-dom";

const NavbarDesktop = () => {
  const searchItemShow = () => {
    // Implement the searchItemShow function here
    console.log("Search item show function called");
  };

  return (
    <div>
      <nav className="navbar border-bottom-navbar">
        <div className="navbar-content container-size">
          <div className="navbar-content-logo">
            <Link to="/">
              <img src="/assets/icon/online-booking.png" alt="Logo" />
            </Link>
          </div>
          <div onClick={searchItemShow}>
            <div
              className="stay-experiences-navbar hidden"
              id="stay-experiences-navbar-id"
            >
              <p>Close</p>
            </div>
            <div className="search-container" id="navbar-search-apartment">
              <input
                type="text"
                placeholder="Anywhere"
                className="search-input"
                id="navbar-search-anywhere"
              />

              <input
                type="text"
                placeholder="Any week"
                className="search-input"
                id="navbar-search-anyweek"
              />

              <input
                type="text"
                placeholder="Add guests"
                className="search-input"
                id="navbar-search-anyguests"
              />
              <button className="search-button">
                <img src="/assets/icon/search-icon-navbar.png" alt="Search" />
              </button>
            </div>
          </div>
          <div className="user-controls">
            <button className="globe-icon-button">
              <i className="globe-icon">
                <img
                  src="/assets/icon/language_icon_navbar.png"
                  alt="Language"
                />
              </i>
            </button>

            <button className="menu-icon-button">
              <img src="/assets/icon/menu_icon_navbar.png" alt="Menu" />
              <img
                src="/assets/icon/account_circle_icon_navbar.png"
                alt="Account"
              />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarDesktop;
