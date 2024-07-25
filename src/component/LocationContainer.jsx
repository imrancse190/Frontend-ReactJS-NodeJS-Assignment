import React from "react";
import { ShowMoreButton } from "./ShowMoreButton";

export const LocationContainer = ({ location, latitude, longitude }) => {
  return (
    <div>
      <section className="location-info container-size">
        <h2 className="location-heading">Where you'll be</h2>
        <p className="location-address">
          <p>{location}</p>
          <p>
            {"Latitude: " + latitude}
            {". Longitude: " + longitude}
          </p>
        </p>

        <div className="location-map">
          <img alt="" src="./assets/images/map_image.png" />
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450699!2d144.9630573153186!3d-37.8162799797519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773a81e47caf5d!2sMelbourne%2C%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1627779227808!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe> */}
        </div>
        <ShowMoreButton text="Show More" />
      </section>
    </div>
  );
};
