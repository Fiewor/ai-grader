import React from "react";

// this button is meant to enable users view text extracted from images uploaded
// also display key phrases
// after grading logic is done, display result of grading

const ViewButton = () => {
  return (
    // perform a get request to get read result from backend
    <button className="view-button">
      <a href="./viewText">View uploads</a>
    </button>
  );
};

export default ViewButton;
