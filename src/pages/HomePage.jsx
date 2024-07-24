import React, { useEffect, useState } from "react";
import axios from "axios";
import { HomePageItemCard } from "../component/HomePageItemCard";

export const HomePage = () => {
  const [hotelsInfo, setHotelsInfo] = useState([]);
  const getAllHotels = () => {
    axios
      .get("http://localhost:3000/api/hotel")
      .then((data) => {
        console.log(data.data);
        setHotelsInfo(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllHotels();
  }, []);
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
