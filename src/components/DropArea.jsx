import React from "react";
import { UploadBox, ViewButton } from "./index";

export const DropArea = (mark) => {
  return (
    <div className="upload-area">
      <UploadBox section="answer" />
      <UploadBox section="mark" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ViewButton children="View text" path="/viewText" />
        <ViewButton children="View grade" path="/viewGrade" />
      </div>
    </div>
  );
};
