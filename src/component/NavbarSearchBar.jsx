import React, { useState, useEffect, useRef } from "react";
import MyDatePicker from "./MyDatePicker";

export const NavbarSearchBar = () => {
  const [where, setWhere] = useState("Search destinations");
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [visibleState, setVisibleState] = useState([false, false, false, false]);
  const [selectedOption, setSelectedOption] = useState(null);

  const containerRef = useRef(null);
  const whereRef = useRef(null);
  const datePickerRef = useRef(null);
  const guestsRef = useRef(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleIncrement = (setter) => {
    setter((prevCount) => prevCount + 1);
  };

  const handleDecrement = (setter) => {
    setter((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

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

  const handleWhereSelect = (value) => {
    setWhere(value);
    toggleView(1);
  };

  const formatDate = (date) => {
    if (!date) return "Add dates";
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        if (visibleState.some(state => state)) {
          setVisibleState([false, false, false, false]);
        }
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visibleState]);

  return (
    <div className="container-size" ref={containerRef} style={{paddingBottom:"10px"}}>
      
      <div>
        <div className={`navbar-search-box ${visibleState[0] || visibleState[1] || visibleState[2] || visibleState[3] ? "navbar-search-box-after-click" : ""}`}>
          <div id="navbar-search-where" className={`navbar-search-hover-effect ${visibleState[0] ? "navbar-search-hover-effect-after-click" : ""}`} onClick={() => toggleView(0)}>
            <div className="bold-text">Where</div>
            <div className="light-text">{where}</div>
          </div>
          <div id="navbar-search-check-in" className={`navbar-search-hover-effect ${visibleState[1] ? "navbar-search-hover-effect-after-click" : ""}`} onClick={() => toggleView(1)}>
            <div className="bold-text">Check in</div>
            <div className="light-text">{formatDate(checkIn)}{selectedOption ? selectedOption : ""} </div>
          </div>
          <div id="navbar-search-check-out" className={`navbar-search-hover-effect ${visibleState[2] ? "navbar-search-hover-effect-after-click" : ""}`} onClick={() => toggleView(2)}>
            <div className="bold-text">Check out</div>
            <div className="light-text">{formatDate(checkOut)}{selectedOption ? selectedOption : ""}</div>
          </div>
          <div id="navbar-search-guest-search-button" className={`navbar-search-hover-effect ${visibleState[3] ? "navbar-search-hover-effect-after-click" : ""}`}>
            <div onClick={() => toggleView(3)} id="navbar-search-guest">
              <div className="bold-text">Who</div>
              <div>{adults + children + infants + pets > 0 ? adults + children + " guests, " + (infants + pets) + " Inf,pets": "Add guests"}</div>
            </div>
            <div className="navbar-search-search-button">
              <img src="./assets/icon/search-icon-navbar.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        {visibleState[0] && (
          <div ref={whereRef} className="navbar-search-map-container">
            <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
              <div className="navbar-search-map-title">Search by region</div>
              <div style={{ cursor: "pointer" }} onClick={() => toggleView(0)}>
                X
              </div>
            </div>
            <div className="navbar-search-map-grid">
              <div className="navbar-search-map-item" onClick={() => handleWhereSelect("I'm flexible")}>
                <img src="./assets/icon/map.png" alt="I'm flexible" />
                <p>I'm flexible</p>
              </div>
              <div className="navbar-search-map-item" onClick={() => handleWhereSelect("Southeast Asia")}>
                <img src="./assets/icon/map.png" alt="Southeast Asia" />
                <p>Southeast Asia</p>
              </div>
              <div className="navbar-search-map-item" onClick={() => handleWhereSelect("Canada")}>
                <img src="./assets/icon/map.png" alt="Canada" />
                <p>Canada</p>
              </div>
              <div className="navbar-search-map-item" onClick={() => handleWhereSelect("Europe")}>
                <img src="./assets/icon/map.png" alt="Europe" />
                <p>Europe</p>
              </div>
              <div className="navbar-search-map-item" onClick={() => handleWhereSelect("Thailand")}>
                <img src="./assets/icon/map.png" alt="Thailand" />
                <p>Thailand</p>
              </div>
              <div className="navbar-search-map-item" onClick={() => handleWhereSelect("Middle East")}>
                <img src="./assets/icon/map.png" alt="Middle East" />
                <p>Middle East</p>
              </div>
            </div>
          </div>
        )}
        {(visibleState[1] || visibleState[2]) && (
          <div ref={datePickerRef} className="navbar-search-date-picker">
            <div className="navbar-search-date-picker-div">
              <div className="navbar-search-date-picker-date-month-flexible">
                <div>
                  <div>Dates</div>
                  <div>Months</div>
                  <div>Flexible</div>
                </div>
              </div>
              <div>
                <div className="navbar-search-date-picker-calendar">
                  <div className="navbar-date-picker-date-picker" id="date-picker-1">
                    <MyDatePicker setCheckIn={setCheckIn} setCheckOut={setCheckOut} />
                  </div>
                </div>
                <div className="check-in-out-day-options">
                  <div className="flexible-dates">
                    <div id="exact-dates" className={selectedOption === '' ? 'selected-option-day' : ''} onClick={() => handleOptionClick('')}>
                      Exact Date
                    </div>
                    <div id="plus-1-day" className={selectedOption === '± 1 day' ? 'selected-option-day' : ''} onClick={() => handleOptionClick('± 1 day')}>
                      ± 1 day
                    </div>
                    <div id="plus-2-days" className={selectedOption === '± 2 days' ? 'selected-option-day' : ''} onClick={() => handleOptionClick('± 2 days')}>
                      ± 2 days
                    </div>
                    <div id="plus-3-days" className={selectedOption === '± 3 days' ? 'selected-option-day' : ''} onClick={() => handleOptionClick('± 3 days')}>
                      ± 3 days
                    </div>
                    <div id="plus-7-days" className={selectedOption === '± 7 days' ? 'selected-option-day' : ''} onClick={() => handleOptionClick('± 7 days')}>
                      ± 7 days
                    </div>
                    <div id="plus-14-days" className={selectedOption === '± 14 days' ? 'selected-option-day' : ''} onClick={() => handleOptionClick('± 14 days')}>
                      ± 14 days
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {visibleState[3] && (
          <div ref={guestsRef} className="search-navbar-item-guests-container">
            <div className="search-navbar-item-guests-group">
              <div className="search-navbar-item-guests-label">
                Adults
                <br />
                <span>Ages 13 or above</span>
              </div>
              <div className="search-navbar-item-guests-controls">
                <button className="search-navbar-item-guests-button decrease" onClick={() => handleDecrement(setAdults)}>
                  -
                </button>
                <span className="search-navbar-item-guests-count">{adults}</span>
                <button className="search-navbar-item-guests-button increase" onClick={() => handleIncrement(setAdults)}>
                  +
                </button>
              </div>
            </div>
            <div className="search-navbar-item-guests-group">
              <div className="search-navbar-item-guests-label">
                Children
                <br />
                <span>Ages 2–12</span>
              </div>
              <div className="search-navbar-item-guests-controls">
                <button className="search-navbar-item-guests-button decrease" onClick={() => handleDecrement(setChildren)}>
                  -
                </button>
                <span className="search-navbar-item-guests-count">{children}</span>
                <button className="search-navbar-item-guests-button increase" onClick={() => handleIncrement(setChildren)}>
                  +
                </button>
              </div>
            </div>
            <div className="search-navbar-item-guests-group">
              <div className="search-navbar-item-guests-label">
                Infants
                <br />
                <span>Under 2</span>
              </div>
              <div className="search-navbar-item-guests-controls">
                <button className="search-navbar-item-guests-button decrease" onClick={() => handleDecrement(setInfants)}>
                  -
                </button>
                <span className="search-navbar-item-guests-count">{infants}</span>
                <button className="search-navbar-item-guests-button increase" onClick={() => handleIncrement(setInfants)}>
                  +
                </button>
              </div>
            </div>
            <div className="search-navbar-item-guests-group-last">
              <div className="search-navbar-item-guests-label">
                Pets
                <br />
                <span>Bringing a service animal?</span>
              </div>
              <div className="search-navbar-item-guests-controls">
                <button className="search-navbar-item-guests-button decrease" onClick={() => handleDecrement(setPets)}>
                  -
                </button>
                <span className="search-navbar-item-guests-count">{pets}</span>
                <button className="search-navbar-item-guests-button increase" onClick={() => handleIncrement(setPets)}>
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};