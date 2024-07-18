import React from "react";

export const ReviewsContainer = () => {
  return (
    <div>
      <section class="review-summary container-size">
        <h3 class="no-reviews-yet">No reviews (yet)</h3>
        <p class="host-review-count">
          <span class="star-icon-review">
            <img src="./assets/icon/review_star_icon_home.png" />
          </span>
          <span>
            <span>This host has 310 reviews for other places to stay.</span>
            <br />
            <a href="#" class="show-other-reviews">
              Show other reviews
            </a>
          </span>
        </p>
      </section>
    </div>
  );
};
