import React from "react";
import UploadBox from "./UploadBox";
import ViewButton from "./ViewButton";

const DropArea = (mark) => {
  return (
    <div className="upload-area">
      <UploadBox section="answer" />

      <ViewButton />
    </div>
  );
};

export default DropArea;
