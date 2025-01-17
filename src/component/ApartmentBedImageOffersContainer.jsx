import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShimmerLoaderText } from "./ShimmerLoaderText";
import api from "../services/api";

export const ApartmentBedImageOffersContainer = ({ amenities }) => {
  const [roomsInfo, setRoomsInfo] = useState([]);
  const { slug } = useParams();

  const getAllRooms = () => {
    api
      .get(`/hotel/${slug}/room`)
      .then((data) => {
        // console.log(data.data);
        setRoomsInfo(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!amenities) {
    return (
      <div>
        <ShimmerLoaderText />
      </div>
    );
  }

  return (
    <div className="apartment-bedImage-offers-container">
      <section className="sleeping-arrangements">
        <h2>Where you'll sleep</h2>
        <div className="bedroom" style={{ display: "flex", flexWrap: "wrap" }}>
          {roomsInfo.map((value, index) => {
            return (
              <div style={{ paddingRight: "10px" }} key={index}>
                <img
                  src={value.room_image}
                  alt="Bedroom"
                  className="bedroom-image"
                />
                <h3>{value.room_title}</h3>
                <p>{value.bedroom_count} double bed</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* <hr style="opacity: 15%; width: 100%" className="hr-for-mobile-version" /> */}
      {/* <!-- Benefits and offers of place  --> */}
      <section className="amenities">
        <h2>What this place offers</h2>
        <ul className="amenities-list">
          {amenities.map((value, index) => {
            return (
              <li key={index}>
                {/* <i className={value.class}></i> */}
                <img
                  src={`./assets/icon/review_star_icon_home.png`}
                  alt=""
                />{" "}
                {value}
              </li>
            );
          })}
        </ul>
        <button className="show-all-amenities">Show all 32 amenities</button>
      </section>
    </div>
  );
};
