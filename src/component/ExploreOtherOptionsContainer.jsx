import React from "react";

const exploreOptionsData = [
  { location: "Cieneguilla", type: "Vacation rentals" },
  { location: "Punta Hermosa", type: "Vacation rentals" },
  { location: "Asia", type: "Vacation rentals" },
  { location: "Chaclacayo", type: "Vacation rentals" },
  { location: "Barranco", type: "Vacation rentals" },
  { location: "Santiago de Surco", type: "Vacation rentals" },
  { location: "San Isidro", type: "Vacation rentals" },
  { location: "San Miguel", type: "Vacation rentals" },
  { location: "Lunahuaná", type: "Vacation rentals" },
];

const otherStaysLinks = [
  "Jesús María vacation rentals",
  "Jesús María monthly stays",
  "Apartment vacation rentals in Lima Province",
  "Apartment vacation rentals in Lima Province",
];

export const ExploreOtherOptionsContainer = () => {
  return (
    <div className="footer-full-data">
      <div className="explore-options-container">
        <nav className="breadcrumb-nav container-size">
          <a href="#" className="breadcrumb-link">
            Peru
          </a>{" "}
          {" > "}
          <a href="#" className="breadcrumb-link">
            {" "}
            Lima Province
          </a>{" "}
          {" > "}
          <span className="breadcrumb-current">Jesús María</span>
        </nav>

        <hr style={{ opacity: "35%" }} />

        <p className="explore-options-title container-size">
          Explore other options in and around Lima
        </p>
        <div className="explore-options-list container-size">
          {exploreOptionsData.map((item, index) => {
            return (
              <div className="explore-options-item" key={index}>
                <h3 className="explore-options-location">{item.location}</h3>
                <p className="explore-options-type">{item.type}</p>
              </div>
            );
          })}
        </div>

        <hr style={{ opacity: "35%" }} />

        <h2 className="explore-options-subtitle container-size">
          Other types of stays on Airbnb
        </h2>
        <div className="other-stays-list container-size">
          {otherStaysLinks.map((item, index) => {
            return (
              <a href="#" className="other-stays-link" key={index}>
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
