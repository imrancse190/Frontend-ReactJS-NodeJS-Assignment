import React from "react";
import { ShowMoreButton } from "./ShowMoreButton";

export const LocationContainer = () => {
  return (
    <div>
      <section className="location-info container-size">
        <h2 className="location-heading">Where you'll be</h2>
        <p className="location-address">Lima, Provincia de Lima, Peru</p>
        <div className="location-map">
          <img alt="" src="./assets/images/map_image.png" />
        </div>
        <ShowMoreButton text="Show More" />
      </section>
    </div>
  );
};
