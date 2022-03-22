import React from "react";
import { UploadBox, ViewButton } from "./index";

export const DropArea = (mark) => {
  return (
    <div className="upload-area">
      <UploadBox section="mark" />
      <UploadBox section="answer" />

      <ViewButton />
    </div>
  );
};
