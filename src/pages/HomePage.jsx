import React, { useEffect, useState } from "react";

import { HomePageItemCard } from "../component/HomePageItemCard";
import { ShimmerLoaderHome } from "../component/ShimmerLoaderHome";
import api from "../services/api";

export const HomePage = () => {
  const [hotelsInfo, setHotelsInfo] = useState(null);

  const getAllHotels = () => {
    api
      .get("/hotel")
      .then((data) => {
        setHotelsInfo(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllHotels();
  }, []);

  if (!hotelsInfo) {
    return (
      <div className="container-size">
        <ShimmerLoaderHome />
        <ShimmerLoaderHome />
        <ShimmerLoaderHome />
      </div>
    );
  }
  return (
    <div
      className="container-size"
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {hotelsInfo.map((value, index) => {
        return (
          <div key={index} style={{ margin: "10px", marginTop: "20px" }}>
            <HomePageItemCard data={value} />
          </div>
        );
      })}
    </div>
  );
};
