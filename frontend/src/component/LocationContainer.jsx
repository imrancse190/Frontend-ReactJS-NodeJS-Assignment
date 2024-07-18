import React from "react";
import { ShowMoreButton } from "./ShowMoreButton";

export const LocationContainer = () => {
  return (
    <div>
      <section class="location-info container-size">
        <h2 class="location-heading">Where you'll be</h2>
        <p class="location-address">Lima, Provincia de Lima, Peru</p>
        <div class="location-map">
          <img src="./assets/images/map_image.png" />
        </div>
        <ShowMoreButton text="Show More" />
      </section>
    </div>
  );
};
