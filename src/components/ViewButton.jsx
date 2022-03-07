import React from "react";
import { Link } from "react-router-dom";

const ViewButton = () => {
  return (
    <Link to="/viewText" className="view-button">
      View uploads
    </Link>
  );
};

export default ViewButton;
