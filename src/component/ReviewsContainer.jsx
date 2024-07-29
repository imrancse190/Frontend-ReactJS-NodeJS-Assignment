import React from "react";
import { Link } from "react-router-dom";

export const ReviewsContainer = () => {
  return (
    <div>
      <section className="review-summary container-size">
        <h3 className="no-reviews-yet">No reviews (yet)</h3>
        <p className="host-review-count">
          <span className="star-icon-review">
            <img alt="" src="./assets/icon/review_star_icon_home.png" />
          </span>
          <span>
            <span>This host has 310 reviews for other places to stay.</span>
            <br />
            <Link href="#" className="show-other-reviews">
              Show other reviews
            </Link>
          </span>
        </p>
      </section>
    </div>
  );
};
