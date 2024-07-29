import React from "react";
import { ShowMoreButton } from "./ShowMoreButton";

export const LocationContainer = ({ location, latitude, longitude }) => {
  return (
    <div>
      <section className="location-info container-size">
        <h2 className="location-heading">Where you'll be</h2>
        <div className="location-address">
          <p>{location}</p>
          <p>
            {"Latitude: " + latitude}
            {". Longitude: " + longitude}
          </p>
        </div>

        <div className="location-map">
          {/* <img alt="" src="./assets/images/map_image.png" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29205.054591750028!2d90.4036352!3d23.7961216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1721896319011!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
        <ShowMoreButton text="Show More" />
      </section>
    </div>
  );
};
