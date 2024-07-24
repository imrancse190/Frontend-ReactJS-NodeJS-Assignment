import React from "react";

export const CheckAvailabilitySidebarContainer = () => {
  return (
    <aside className="booking-widget">
      <div className="booking-widget-box">
        <h2>Add dates for prices</h2>
        <form className="booking-form">
          <div className="date-inputs">
            <div className="input-group">
              <label>CHECK-IN</label>
              <input type="text" name="check-in" placeholder="Add date" />
            </div>
            <div className="input-group">
              <label>CHECKOUT</label>
              <input type="text" name="check-out" placeholder="Add date" />
            </div>
          </div>
          <div className="guest-select">
            <label>GUESTS</label>
            <select name="guests">
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
            </select>
          </div>
          <button type="submit" className="check-availability">
            Check availability
          </button>
        </form>
      </div>
      <a href="#" className="report-listing">
        <image src="./assets/icon/flag_report_icon_body.png" />
        <span>Report this listing</span>
      </a>
    </aside>
  );
};
