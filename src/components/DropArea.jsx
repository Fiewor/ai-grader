import React from "react";
import styled from "styled-components";
import { UploadBox, ViewButton } from "./index";

const UploadArea = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5em;
  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
    width: 100vw;
  }
`;

const Instructions = styled.div`
  p {
    @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Roboto:wght@300&display=swap");
    text-align: left;
    font-family: "Raleway", sans-serif;
    font-size: 1rem;
    padding: 0.4rem 0;
    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  ul {
    font-size: 0.8rem;
    ${"" /* list-style: disc inside; */}
    list-style: disc url('../icons/check_box_FILL0_wght400_GRAD0_opsz48.png') inside;
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
    li {
      font-family: "Roboto", sans-serif;
      padding: 0.2rem 0;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 9vh;
`;

export const DropArea = (mark) => {
  return (
    <UploadArea>
      <Instructions>
        <p>How to use</p>
        <ul>
          <li>Upload a page of student answer sheet in the specified area</li>
          <li>Wait for alert notification confirming successful upload</li>
          <li>Upload marking guide in specified area</li>
          <li>Wait for alert notification confirming successful upload</li>
          <li>Proceed to view extracted text or grade</li>
          <br />
          <li>Supported file formats: JPEG, PNG, BMP, PDF, and TIFF</li>
          <li>
            For PDF and TIFF files, the system currently processes only first
            two pages.
          </li>
          <li>
            The file size must be less than 4 MB and dimensions at least 50 x 50
            pixels and at most 10000 x 10000 pixels.
          </li>
        </ul>
      </Instructions>
      <UploadBox section="answer" />
      <UploadBox section="mark" />
      <ButtonContainer>
        <ViewButton children="View text" path="/viewText" />
        <ViewButton children="View grade" path="/viewGrade" />
      </ButtonContainer>
    </UploadArea>
  );
};
