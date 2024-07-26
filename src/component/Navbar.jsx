import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarSearchBar } from "./NavbarSearchBar";


export const Navbar = () => {
  const [visibleSearchBar, setVisibleSearchBar] = useState(false);
  return (
    <div className="border-bottom-navbar">
      <div>
        <nav className="navbar ">
          <div className="navbar-content container-size">
            <div className="navbar-content-logo">
              <Link to="/" className="hidden-mobile">
                <img src="/assets/icon/online-booking.png" alt="Logo" />
              </Link>
            </div>
            <div onClick={() => setVisibleSearchBar(!visibleSearchBar)}>
              {visibleSearchBar&&<div className="navbar-search-stay-experiences">
                <div>Stay</div>
                <div>Experiences</div>
                <div>Close</div>
              </div>}

              {!visibleSearchBar&&<div className="search-container" id="navbar-search-apartment">
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
              </div>}
            </div>
            <div className="user-controls" >
              <button className="globe-icon-button hidden-mobile">
                <i className="globe-icon " >
                  <img
                    src="/assets/icon/language_icon_navbar.png"
                    alt="Language"
                  />
                </i>
              </button>

              <button className="menu-icon-button">
                <img src="/assets/icon/menu_icon_navbar.png" alt="Menu"  className="hidden-mobile"/>
                <img
                  src="/assets/icon/account_circle_icon_navbar.png"
                  alt="Account"
                />
              </button>
            </div>
          </div>

        </nav>
        <div>
          {visibleSearchBar && <NavbarSearchBar />}
        </div>
      </div>



    </div>
  );
};
