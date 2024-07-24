import React from "react";
import { ShowMoreButton } from "./ShowMoreButton";

export const HostedApartmentInformationContainer = () => {
  return (
    <div>
      <header className="listing-header ">
        <div className="header-items-title-for-mobile-device">
          Comfy New Apt. in Pueblo Libre!
        </div>
        <div className="listing-title">Entire rental unit in Lima, Peru</div>
        <p className="listing-details">2 guests · 1 bedroom · 1 bed · 1 bath</p>
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
          <p className="host-name">Hosted by Fernando</p>
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
          <a href="#" className="show-original">
            Show original
          </a>
        </p>
      </div>

      <section className="listing-description">
        <p>
          Welcome to our brand-new 1 bedroom apartment, in a quiet and central
          location next to a park!
        </p>
        <p>
          It's conveniently located in Pueblo Libre, just 25min. away from the
          airport. Steps away from Clínica Stella Maris, Universidad Antonio
          Ruiz de Montoya, Instituto Británico, Hospital Santa Rosa, YMCA Peru
          and Alas Peruanas University. It's also very close to La ...
        </p>
        <ShowMoreButton text="Show More" />
      </section>
    </div>
  );
};
