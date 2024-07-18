import React from "react";

export const CheckAvailabilitySidebarContainer = () => {
  return (
    <aside class="booking-widget">
      <div class="booking-widget-box">
        <h2>Add dates for prices</h2>
        <form class="booking-form">
          <div class="date-inputs">
            <div class="input-group">
              <label>CHECK-IN</label>
              <input type="text" name="check-in" placeholder="Add date" />
            </div>
            <div class="input-group">
              <label>CHECKOUT</label>
              <input type="text" name="check-out" placeholder="Add date" />
            </div>
          </div>
          <div class="guest-select">
            <label>GUESTS</label>
            <select name="guests">
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
            </select>
          </div>
          <button type="submit" class="check-availability">
            Check availability
          </button>
        </form>
      </div>
      <a href="#" class="report-listing">
        <image src="./assets/icon/flag_report_icon_body.png" />
        <span>Report this listing</span>
      </a>
    </aside>
  );
};
