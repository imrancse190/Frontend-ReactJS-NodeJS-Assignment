import React from "react";

export const PageNotFound = ({ message = "404. That's an error." }) => {
  return (
    <div>
      <div className="page-not-found-container">
        <div className="page-not-found-logo">Airbnb</div>
        <div className="page-not-found-error">{message}</div>
        <div className="page-not-found-message">
          The requested <b>URL was not found</b> on this server.
        </div>
        <div className="page-not-found-robot">🤖</div>
      </div>
    </div>
  );
};
