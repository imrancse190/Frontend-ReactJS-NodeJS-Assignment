import React from "react";
import { ShowMoreButton } from "./ShowMoreButton";

const thingsToKnowData = [
  {
    subtitle: "House rules",
    content: [
      "Check-in after 4:00 PM",
      "Checkout before 11:00 AM",
      "2 guests maximum",
    ],
    showMoreLink: "Show More",
  },
  {
    subtitle: "Safety & property",
    content: [
      "Carbon monoxide alarm not reported",
      "Smoke alarm not reported",
      "Not suitable for children and infants",
    ],
    showMoreLink: "Show More",
  },
  {
    subtitle: "Cancellation policy",
    content: [
      "Add your trip dates to get the cancellation details for this stay.",
    ],
    showMoreLink: "Add dates",
  },
];

export const ApartmentRulesSafetyPolicyContainer = () => {
  return (
    <div>
      <div className="things-to-know-container container-size">
        <h2 className="things-to-know-title">Things to know</h2>
        <div className="things-to-know-sections">
          {thingsToKnowData.map((item, index) => {
            return (
              <div className="things-to-know-section" key={index}>
                <h3 className="things-to-know-subtitle">{item.subtitle}</h3>
                {item.content.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
                <ShowMoreButton text={item.showMoreLink} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
