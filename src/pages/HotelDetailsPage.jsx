import { ApartmentBedImageOffersContainer } from "../component/ApartmentBedImageOffersContainer";
import { CheckAvailabilitySidebarContainer } from "../component/CheckAvailabilitySidebarContainer";
import HeaderTitleSaveShare from "../component/HeaderTitleSaveShare";
import { HostedApartmentInformationContainer } from "../component/HostedApartmentInformationContainer";
import { HostInformationContainer } from "../component/HostInformationContainer";
import ImagesContainer from "../component/ImagesContainer";
import { LocationContainer } from "../component/LocationContainer";
import { ReviewsContainer } from "../component/ReviewsContainer";
import { TravelCheckInDateContainer } from "../component/TravelCheckInDateContainer";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const HotelDetailsPage = () => {
  const [hotelInfo, setHotelInfo] = useState([]);
  const getAllHotels = () => {
    axios
      .get("http://localhost:3000/api/hotel/")
      .then((data) => {
        console.log(data.data);
        setHotelInfo(data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllHotels();
  }, []);
  return (
    <div className="App">
      <HeaderTitleSaveShare />
      <ImagesContainer />
      <div class="container-size details-information">
        <div class="rental-listing">
          <HostedApartmentInformationContainer />
          <ApartmentBedImageOffersContainer />
          <TravelCheckInDateContainer />
        </div>
        <div>
          <CheckAvailabilitySidebarContainer />
        </div>
      </div>
      <ReviewsContainer />
      <LocationContainer />
      <HostInformationContainer />
    </div>
  );
};
