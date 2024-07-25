import React from "react";
import { ShowMoreButton } from "./ShowMoreButton";
import { Link } from "react-router-dom";
import { ShimmerLoaderText } from "./ShimmerLoaderText";
import { ShimmerLoaderHome } from "./ShimmerLoaderHome";

export const HostedApartmentInformationContainer = ({
  title,
  host_information,
  guest,
  bathroom,
  bedroom,
  description,
  address,
}) => {
  if (!host_information) {
    return (
      <>
        <ShimmerLoaderHome />
        <ShimmerLoaderText />
        <ShimmerLoaderText />
        <ShimmerLoaderText />
        <ShimmerLoaderText />
        <ShimmerLoaderText />
      </>
    );
  }
  const hostInfoArray = host_information.split(",");
  const host_name = hostInfoArray.slice(0, 1).join(", ");
  return (
    <div>
      <header className="listing-header ">
        <div className="header-items-title-for-mobile-device">{title}</div>
        <div className="listing-title">{address}</div>
        <p className="listing-details">
          {guest} guests · {bedroom} bedroom · 1 bed · {bathroom} bath
        </p>
        <span className="listing-tag">
          <img alt="" src="./assets/icon/star_icon_home.png" />
          New
        </span>
      </header>

      {/* <!-- Hosted profile --> */}
      <section className="host-info">
        <img
          alt=""
          src="./assets/images/user_demo_images.png"
          className="host-avatar"
        />
        <div className="host-details">
          <p className="host-name">Hosted by {host_name}</p>
          <p className="host-status">Superhost · 7 Years hosting</p>
        </div>
      </section>

      <section className="listing-features">
        <div className="feature">
          <i className="icon-key">
            <img alt="" src="./assets/icon/smartLock_icon_home.png" />
          </i>
          <div>
            <h4>Self check-in</h4>
            <p className="feature-description">
              Check yourself in with the smartlock.
            </p>
          </div>
        </div>
        <div className="feature">
          <i className="icon-medal">
            <img alt="" src="./assets/icon/superHost_icon_home.png" />
          </i>
          <div>
            <h4>Fernando is a Superhost</h4>
            <p className="feature-description">
              Superhosts are experienced, highly rated Hosts.
            </p>
          </div>
        </div>
      </section>

      <div className="translation-notice">
        <p>
          Some info has been automatically translated.
          <Link to="#" className="show-original">
            Show original
          </Link>
        </p>
      </div>

      <section className="listing-description">
        <p>
          Welcome to our brand-new {bedroom} bedroom apartment, in a quiet and
          central location {address}!
        </p>
        <p>
          It's conveniently located in {address}. {description}
        </p>
        <ShowMoreButton text="Show More" />
      </section>
    </div>
  );
};
