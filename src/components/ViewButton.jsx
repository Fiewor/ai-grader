import React from "react";
import { Link } from "react-router-dom";

export const ViewButton = () => {
  return (
    <Link to="/viewText" className="view-button">
      View uploads
    </Link>
  );
};
