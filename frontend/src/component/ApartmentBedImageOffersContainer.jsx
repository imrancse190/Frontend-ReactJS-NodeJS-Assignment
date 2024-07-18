import React from "react";

// ./assets/icon/place_offers/
const listData = [
  {
    class: "icon-kitchen",
    imageSrc: "kitchen.svg",
    innerText: "Kitchen",
  },
  {
    class: "icon-wifi",
    imageSrc: "wifi.png",
    innerText: "Wifi",
  },
  {
    class: "icon-tv",
    imageSrc: "tv.png",
    innerText: "TV",
  },
  {
    class: "icon-elevator",
    imageSrc: "elevator.png",
    innerText: "Elevator",
  },
  {
    class: "icon-washer",
    imageSrc: "washer_dryer.png",
    innerText: "Washer",
  },
  {
    class: "icon-dryer",
    imageSrc: "washer_dryer.png",
    innerText: "Dryer",
  },
  {
    class: "icon-hairdryer",
    imageSrc: "hairdryer.png",
    innerText: "Hair dryer",
  },
  {
    class: "icon-refrigerator",
    imageSrc: "refrigerator.png",
    innerText: "Refrigerator",
  },
  {
    class: "icon-co-alarm",
    imageSrc: "carbon_alarm.png",
    innerText: "Carbon monoxide alarm",
  },
  {
    class: "icon-smoke-alarm",
    imageSrc: "smoke_alarm.png",
    innerText: "Smoke alarm",
  },
];

export const ApartmentBedImageOffersContainer = () => {
  return (
    <div class="apartment-bedImage-offers-container">
      <section class="sleeping-arrangements">
        <h2>Where you'll sleep</h2>
        <div class="bedroom">
          <img
            src="./assets/images/bedroom1.jpg"
            alt="Bedroom"
            class="bedroom-image"
          />
          <h3>Bedroom</h3>
          <p>1 double bed</p>
        </div>
      </section>

      {/* <hr style="opacity: 15%; width: 100%" class="hr-for-mobile-version" /> */}
      {/* <!-- Benefits and offers of place  --> */}
      <section class="amenities">
        <h2>What this place offers</h2>
        <ul class="amenities-list">
          {listData.map((value, index) => {
            return (
              <li key={index}>
                <i className={value.class}></i>
                <img
                  src={`./assets/icon/place_offers/${value.imageSrc}`}
                  alt={value.innerText}
                />{" "}
                {value.innerText}
              </li>
            );
          })}
        </ul>
        <button class="show-all-amenities">Show all 32 amenities</button>
      </section>
    </div>
  );
};
