import React from "react";
import { ShowMoreButton } from "./ShowMoreButton";

export const HostInformationContainer = () => {
  return (
    <div>
      <section class="host-profile container-size">
        <h2 class="host-heading">Meet your Host</h2>
        <div class="host-all-information">
          <div class="host-personal-info">
            <div class="host-card">
              <div class="host-name-badge-image">
                <img
                  src="./assets/images/user_demo_images.png"
                  alt="Fernando"
                  class="host-photo"
                />

                <h3 class="host-name">Fernando</h3>
                <p class="host-badge">🎖Superhost</p>
              </div>
              <div class="host-stats">
                <p class="review-count">
                  <span>310</span> Reviews
                </p>
                {/* <hr style="opacity: 15%" /> */}
                <p class="host-rating">
                  <span class="star-icon">4.92★</span> Rating
                </p>
                {/* <hr style="opacity: 15%" /> */}
                <p class="hosting-years">
                  <span>7</span> Years hosting
                </p>
              </div>
            </div>
            <div class="additional-host-info">
              <p class="host-birth-decade">
                <span class="icon">🎂</span> Born in the 80s
              </p>
              <p class="host-occupation">
                <span class="icon">💼</span> My work: Hospitality
              </p>
              <p class="host-bio">
                Hello world! I love traveling and I also love welcoming guests
                in my home country, Peru, meeting new...
              </p>
              <ShowMoreButton text="Show more" />
            </div>
          </div>

          {/* <hr
            style="opacity: 15%; width: 100%; margin-top: 20px"
            class="hr-for-mobile-version"
          /> */}

          <div class="host-details">
            <p class="superhost-description">Fernando is a Superhost</p>
            <p class="superhost-info">
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </p>
            <div class="co-hosts">
              <h4 class="co-hosts-heading">Co-hosts</h4>
              <div>
                <img
                  src="./assets/icon/man.png"
                  alt="Percy"
                  class="co-host-photo"
                />
                <span>Percy</span>
                <img
                  src="./assets/icon/girl.png"
                  alt="Raul"
                  class="co-host-photo"
                />
                <span>Raul</span>
              </div>
            </div>
            <div class="host-response-info">
              <h4 class="co-hosts-heading">Hots details</h4>
              <div>
                <p class="response-rate">Response rate: 100%</p>
                <p class="response-time">Responds within an hour</p>
              </div>
            </div>
            <button class="message-host-btn">Message Host</button>
          </div>
        </div>
      </section>
    </div>
  );
};
