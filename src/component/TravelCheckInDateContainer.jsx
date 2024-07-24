import React from "react";

const JulyCalendarData = [
  { class: "calendar-day", value: "Sun" },
  { class: "calendar-day", value: "Mon" },
  { class: "calendar-day", value: "Tue" },
  { class: "calendar-day", value: "Wed" },
  { class: "calendar-day", value: "Thu" },
  { class: "calendar-day", value: "Fri" },
  { class: "calendar-day", value: "Sat" },
  { class: "calendar-date empty", value: "" },
  { class: "calendar-date calendar-offday", value: "1" },
  { class: "calendar-date calendar-offday", value: "2" },
  { class: "calendar-date calendar-offday", value: "3" },
  { class: "calendar-date calendar-offday", value: "4" },
  { class: "calendar-date calendar-offday", value: "5" },
  { class: "calendar-date calendar-offday", value: "6" },
  { class: "calendar-date calendar-offday", value: "7" },
  { class: "calendar-date", value: "8" },
  { class: "calendar-date", value: "9" },
  { class: "calendar-date", value: "10" },
  { class: "calendar-date", value: "11" },
  { class: "calendar-date", value: "12" },
  { class: "calendar-date", value: "13" },
  { class: "calendar-date calendar-offday", value: "14" },
  { class: "calendar-date calendar-offday", value: "15" },
  { class: "calendar-date calendar-offday", value: "16" },
  { class: "calendar-date calendar-offday", value: "17" },
  { class: "calendar-date calendar-offday", value: "18" },
  { class: "calendar-date calendar-offday", value: "19" },
  { class: "calendar-date", value: "20" },
  { class: "calendar-date", value: "21" },
  { class: "calendar-date", value: "22" },
  { class: "calendar-date", value: "23" },
  { class: "calendar-date", value: "24" },
  { class: "calendar-date", value: "25" },
  { class: "calendar-date", value: "26" },
  { class: "calendar-date", value: "27" },
  { class: "calendar-date", value: "28" },
  { class: "calendar-date", value: "29" },
  { class: "calendar-date", value: "30" },
  { class: "calendar-date", value: "31" },
  { class: "calendar-date empty", value: "" },
  { class: "calendar-date empty", value: "" },
  { class: "calendar-date empty", value: "" },
];
const AugustCalendarData = [
  { class: "calendar-day", value: "Sun" },
  { class: "calendar-day", value: "Mon" },
  { class: "calendar-day", value: "Tue" },
  { class: "calendar-day", value: "Wed" },
  { class: "calendar-day", value: "Thu" },
  { class: "calendar-day", value: "Fri" },
  { class: "calendar-day", value: "Sat" },
  { class: "calendar-date empty", value: "" },
  { class: "calendar-date empty", value: "" },
  { class: "calendar-date", value: "1" },
  { class: "calendar-date", value: "2" },
  { class: "calendar-date", value: "3" },
  { class: "calendar-date", value: "4" },
  { class: "calendar-date", value: "5" },
  { class: "calendar-date", value: "6" },
  { class: "calendar-date", value: "7" },
  { class: "calendar-date", value: "8" },
  { class: "calendar-date", value: "9" },
  { class: "calendar-date", value: "10" },
  { class: "calendar-date", value: "11" },
  { class: "calendar-date", value: "12" },
  { class: "calendar-date", value: "13" },
  { class: "calendar-date", value: "14" },
  { class: "calendar-date", value: "15" },
  { class: "calendar-date", value: "16" },
  { class: "calendar-date", value: "17" },
  { class: "calendar-date", value: "18" },
  { class: "calendar-date", value: "19" },
  { class: "calendar-date", value: "20" },
  { class: "calendar-date", value: "21" },
  { class: "calendar-date", value: "22" },
  { class: "calendar-date", value: "23" },
  { class: "calendar-date", value: "24" },
  { class: "calendar-date", value: "25" },
  { class: "calendar-date", value: "26" },
  { class: "calendar-date", value: "27" },
  { class: "calendar-date", value: "28" },
  { class: "calendar-date", value: "29" },
  { class: "calendar-date", value: "30" },
  { class: "calendar-date", value: "31" },
  { class: "calendar-date empty", value: "" },
  { class: "calendar-date empty", value: "" },
  { class: "calendar-date empty", value: "" },
  { class: "calendar-date empty", value: "" },
];

export const TravelCheckInDateContainer = () => {
  return (
    <div>
      <section className="availability-calendar">
        <h2>Select check-in date</h2>
        <p className="availability-calendar-hint">
          Add your travel dates for exact pricing
        </p>
        <div className="calendar">
          <div className="custom-calendar">
            <div className="calendar-header">
              <button className="prev-month-btn">&lt;</button>
              <h2>July 2024</h2>
              <button className="next-month-btn">
                &gt;
                <img alt="" src="./assets/icon/right_arrow_icon_home.png" />
              </button>
            </div>
            <div className="calendar-grid">
              {JulyCalendarData.map((item, index) => {
                return (
                  <div className={item.class} key={index}>
                    {item.value}
                  </div>
                );
              })}
            </div>
          </div>
          {/* <!-- Checkout date --> */}
          <div className="custom-calendar calendar-august">
            <div className="calendar-header">
              <button className="prev-month-btn">&lt;</button>
              <h2>August 2024</h2>
              <button className="next-month-btn">&gt;</button>
            </div>
            <div className="calendar-grid">
              {AugustCalendarData.map((item, index) => {
                return (
                  <div className={item.class} key={index}>
                    {" "}
                    {item.value}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="select-keyboard-and-clear-date">
          <img alt="" src="./assets/icon/keyboard_icon_home.png" />
          <button className="clear-dates">Clear dates</button>
        </div>
      </section>
    </div>
  );
};
