import React, { useState } from "react";

export const NavbarSearchBar = () => {
  const [where, setWhere] = useState(null);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [who, setWho] = useState(null);
  const [visibleState, setVisibleState] = useState([
    false,
    false,
    false,
    false,
  ]);

  const toggleView = (index) => {
    const newVisibleState = [...visibleState];
    for (let i = 0; i < newVisibleState.length; i++) {
      if (i !== index) {
        newVisibleState[i] = false;
      } else {
        newVisibleState[i] = !newVisibleState[i];
      }
    }

    setVisibleState(newVisibleState);
  };

  return (
    <div>
      <div className="navbar-search-stay-experiences">
        <div>Stay</div>
        <div>Experiences</div>
      </div>
      <div>
        <div className="navbar-search-box">
          <div id="navbar-search-where" onClick={toggleView(0)}>
            <div class="bold-text">Where</div>
            <div class="light-text">Search destinaitons</div>
          </div>
          <div id="navbar-search-check-in" onClick={toggleView(0)}>
            <div class="bold-text">Check in</div>
            <div class="light-text">Add dates</div>
          </div>
          <div id="navbar-search-check-out" onClick={toggleView(0)}>
            <div class="bold-text">Check out</div>
            <div class="light-text">Add dates</div>
          </div>
          <div id="navbar-search-guest-search-button">
            <div onClick={toggleView(0)}>
              <div class="bold-text">Who</div>
              <div>Add guests</div>
            </div>
            <div className="navbar-search-search-button">
              <img src="./assets/icon/search-icon-navbar.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        {/* <!-- searchVar map container --> */}
        <div
          class="navbar-search-map-container hidden"
          id="navbar-search-map-container-id"
        >
          <h2 class="navbar-search-map-title">Search by region</h2>
          <div class="navbar-search-map-grid">
            <div class="navbar-search-map-item" onclick="getValue(this)">
              <img src="./assets/icon/map/map.png" alt="I'm flexible" />
              <p value="I'm flexible">I'm flexible</p>
            </div>
            <div class="navbar-search-map-item" onclick="getValue(this)">
              <img src="./assets/icon/map/map.png" alt="Southeast Asia" />
              <p value="Southeast Asia">Southeast Asia</p>
            </div>
            <div class="navbar-search-map-item" onclick="getValue(this)">
              <img src="./assets/icon/map/map.png" alt="Canada" />
              <p value="Canada">Canada</p>
            </div>
            <div class="navbar-search-map-item" onclick="getValue(this)">
              <img src="./assets/icon/map/map.png" alt="Europe" />
              <p value="Europe">Europe</p>
            </div>
            <div class="navbar-search-map-item" onclick="getValue(this)">
              <img src="./assets/icon/map/map.png" alt="Thailand" />
              <p value="Thailand">Thailand</p>
            </div>
            <div class="navbar-search-map-item" onclick="getValue(this)">
              <img src="./assets/icon/map/map.png" alt="Middle East" />
              <p value="Middle East">Middle East</p>
            </div>
          </div>
        </div>
        {/* <!-- navbar search date picker --> */}
        <div class="navbar-search-date-picker hidden">
          <div class="navbar-search-date-picker-div">
            <div class="navbar-search-date-picker-date-month-flexible">
              <div>
                <div>Dates</div>
                <div>Months</div>
                <div>Flexible</div>
              </div>
            </div>
            <div>
              <div class="navbar-search-date-picker-calendar">
                <div class="navbar-date-picker-date-picker" id="date-picker-1">
                  <input
                    style={{ position: "absolute", left: "-9999px" }}
                    type="text"
                    id="myDatePicker1"
                    class="flatpickr-input"
                  />
                </div>
                <div class="navbar-date-picker-date-picker" id="date-picker-2">
                  <input
                    style={{ position: "absolute", left: "-9999px" }}
                    type="text"
                    id="myDatePicker2"
                    class="flatpickr-input"
                  />
                </div>
              </div>
              <div class="check-in-out-day-options">
                <div class="flexible-dates">
                  <div id="exact-dates">± 0 day</div>
                  <div id="plus-1-day">± 1 day</div>
                  <div id="plus-2-days">± 2 days</div>
                  <div id="plus-3-days">± 3 days</div>
                  <div id="plus-7-days">± 7 days</div>
                  <div id="plus-14-days">± 14 days</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- search-navbar-item-guests- --> */}
        <div>
          <div class="search-navbar-item-guests-container hidden">
            <div class="search-navbar-item-guests-group">
              <div class="search-navbar-item-guests-label">
                Adults
                <br />
                <span>Ages 13 or above</span>
              </div>
              <div class="search-navbar-item-guests-controls">
                <button class="search-navbar-item-guests-button decrease">
                  -
                </button>
                <span class="search-navbar-item-guests-count">0</span>
                <button class="search-navbar-item-guests-button increase">
                  +
                </button>
              </div>
            </div>
            <div class="search-navbar-item-guests-group">
              <div class="search-navbar-item-guests-label">
                Children
                <br />
                <span>Ages 2–12</span>
              </div>
              <div class="search-navbar-item-guests-controls">
                <button class="search-navbar-item-guests-button decrease">
                  -
                </button>
                <span class="search-navbar-item-guests-count">0</span>
                <button class="search-navbar-item-guests-button increase">
                  +
                </button>
              </div>
            </div>
            <div class="search-navbar-item-guests-group">
              <div class="search-navbar-item-guests-label">
                Infants
                <br />
                <span>Under 2</span>
              </div>
              <div class="search-navbar-item-guests-controls">
                <button class="search-navbar-item-guests-button decrease">
                  -
                </button>
                <span class="search-navbar-item-guests-count">0</span>
                <button class="search-navbar-item-guests-button increase">
                  +
                </button>
              </div>
            </div>
            <div class="search-navbar-item-guests-group">
              <div class="search-navbar-item-guests-label">
                Pets
                <br />
                <span>Bringing a service animal?</span>
              </div>
              <div class="search-navbar-item-guests-controls">
                <button class="search-navbar-item-guests-button decrease">
                  -
                </button>
                <span class="search-navbar-item-guests-count">0</span>
                <button class="search-navbar-item-guests-button increase">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
