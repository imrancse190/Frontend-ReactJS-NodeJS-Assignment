import React from "react";
import { Link } from "react-router-dom";

export const HomePageItemCard = ({ data }) => {
  let imageIndex = Math.floor(Math.random() * 8) + 1;

  //   For spliting address
  const addressParts = data.address.split(",");
  const location = addressParts.slice(-2).join(", ");
  //   For spliting host name
  const hostParts = data.host_information.split(",");
  const host_info = hostParts.slice(0, 1).join(", ");

  return (
    <Link
      to={`/${data.slug}`}
      style={{ textDecoration: "none", color: "#555" }}
    >
      <div class="item-card-container">
        <div class="item-card-image-wrapper">
          <img
            src={`./assets/images/bedroom${imageIndex}.jpg`}
            alt="Prince's Purple Rain house"
            class="item-card-image"
          />
        </div>
        <div class="item-card-content">
          <h2 class="item-card-title">{location}</h2>
          <p class="item-card-host">Hosted by {host_info}</p>
          <p class="item-card-date">Now available!</p>
        </div>
      </div>
    </Link>
  );
};
