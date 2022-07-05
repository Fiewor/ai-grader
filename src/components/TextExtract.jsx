import React from "react";
import { UploadBox, ViewButton } from "./index";
import { ButtonContainer } from "./DropArea";

export const TextExtract = () => {
  return (
    <>
      <UploadBox section="text" />
      <ButtonContainer>
        <ViewButton children="View text" path="/viewText" />
      </ButtonContainer>
    </>
  );
};
