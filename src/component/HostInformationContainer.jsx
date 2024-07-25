import React from "react";
import { ShowMoreButton } from "./ShowMoreButton";
import { ShimmerLoaderHome } from "./ShimmerLoaderHome";

export const HostInformationContainer = ({ host_info }) => {
  if (!host_info) {
    return (
      <div className="container-size">
        <ShimmerLoaderHome />
      </div>
    );
  }
  const hostInfoArray = host_info.split(",");
  const host_name = hostInfoArray.slice(0, 1).join(", ");
  const host_phone = hostInfoArray.slice(1, 2).join(", ");
  const host_mail = hostInfoArray.slice(2, 3).join(", ");

  return (
    <div>
      <section className="host-profile container-size">
        <h2 className="host-heading">Meet your Host</h2>
        <div className="host-all-information">
          <div className="host-personal-info">
            <div className="host-card">
              <div className="host-name-badge-image">
                <img
                  src="./assets/images/user_demo_images.png"
                  alt="Fernando"
                  className="host-photo"
                />

                <h3 className="host-name">{host_name}</h3>
                <p className="host-badge">🎖Superhost</p>
              </div>
              <div className="host-stats">
                <p className="review-count">
                  <span>310</span> Reviews
                </p>
                {/* <hr style="opacity: 15%" /> */}
                <p className="host-rating">
                  <span className="star-icon">4.92★</span> Rating
                </p>
                {/* <hr style="opacity: 15%" /> */}
                <p className="hosting-years">
                  <span>7</span> Years hosting
                </p>
              </div>
            </div>
            <div className="additional-host-info">
              <p className="host-birth-decade">
                <span className="icon">🎂</span> Born in the 80s
              </p>
              <p className="host-occupation">
                <span className="icon">💼</span> My work: Hospitality
              </p>
              <p className="host-occupation">
                <span className="icon">📞</span> Phone: {host_phone}
              </p>
              <p className="host-occupation">
                <span className="icon">📧</span> Email: {host_mail}
              </p>
              <p className="host-bio">
                Hello world! I love traveling and I also love welcoming guests
                in my home country, Peru, meeting new...
              </p>
              <ShowMoreButton text="Show more" />
            </div>
          </div>

          <div className="host-details">
            <p className="superhost-description">Fernando is a Superhost</p>
            <p className="superhost-info">
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </p>
            <div className="co-hosts">
              <h4 className="co-hosts-heading">Co-hosts</h4>
              <div>
                <img
                  src="./assets/icon/man.png"
                  alt="Percy"
                  className="co-host-photo"
                />
                <span>Percy</span>
                <img
                  src="./assets/icon/girl.png"
                  alt="Raul"
                  className="co-host-photo"
                />
                <span>Raul</span>
              </div>
            </div>
            <div className="host-response-info">
              <h4 className="co-hosts-heading">Hots details</h4>
              <div>
                <p className="response-rate">Response rate: 100%</p>
                <p className="response-time">Responds within an hour</p>
              </div>
            </div>
            <button className="message-host-btn">Message Host</button>
          </div>
        </div>
      </section>
    </div>
  );
};
