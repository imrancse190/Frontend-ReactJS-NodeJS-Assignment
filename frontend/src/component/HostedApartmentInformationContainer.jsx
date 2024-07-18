import React from "react";
import { ShowMoreButton } from "./ShowMoreButton";

export const HostedApartmentInformationContainer = () => {
  return (
    <div>
      <header class="listing-header ">
        <div class="header-items-title-for-mobile-device">
          Comfy New Apt. in Pueblo Libre!
        </div>
        <div class="listing-title">Entire rental unit in Lima, Peru</div>
        <p class="listing-details">2 guests · 1 bedroom · 1 bed · 1 bath</p>
        <span class="listing-tag">
          <img src="./assets/icon/star_icon_home.png" />
          New
        </span>
      </header>

      {/* <!-- Hosted profile --> */}
      <section class="host-info">
        <img src="./assets/images/user_demo_images.png" class="host-avatar" />
        <div class="host-details">
          <p class="host-name">Hosted by Fernando</p>
          <p class="host-status">Superhost · 7 Years hosting</p>
        </div>
      </section>

      <section class="listing-features">
        <div class="feature">
          <i class="icon-key">
            <img src="./assets/icon/smartLock_icon_home.png" />
          </i>
          <div>
            <h4>Self check-in</h4>
            <p class="feature-description">
              Check yourself in with the smartlock.
            </p>
          </div>
        </div>
        <div class="feature">
          <i class="icon-medal">
            <img src="./assets/icon/superHost_icon_home.png" />
          </i>
          <div>
            <h4>Fernando is a Superhost</h4>
            <p class="feature-description">
              Superhosts are experienced, highly rated Hosts.
            </p>
          </div>
        </div>
      </section>

      <div class="translation-notice">
        <p>
          Some info has been automatically translated.
          <a href="#" class="show-original">
            Show original
          </a>
        </p>
      </div>

      <section class="listing-description">
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
