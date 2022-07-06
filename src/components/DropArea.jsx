import React from "react";
import styled from "styled-components";
import { UploadBox, ViewButton } from "./index";
import {
  Container,
  Instructions,
  Title,
  List,
  Group,
  Item,
} from "./TextExtract";

// const UploadArea = styled.div`
//   width: 70vw;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 0.5rem;
//   padding: 0.5em;
//   @media screen and (min-width: 768px) {
//     font-size: 1.1rem;
//     width: 100vw;
//   }
// `;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 9vh;
`;

// const ButtonDiv = styled.div`
//   &: hover;
// `;

export const DropArea = (mark) => {
  return (
    <Container>
      <Instructions>
        <Title>How to use</Title>

        <List>
          <Group>
            <Item>
              Upload a page of student answer sheet in the specified area
            </Item>
            <Item>
              Wait for alert notification confirming successful upload
            </Item>
            <Item>Upload marking guide in specified area</Item>
            <Item>
              Wait for alert notification confirming successful upload
            </Item>
            <Item>
              Wait for about 5 minutes for reading and keyword extraction to be
              carried out
            </Item>
            <Item>Proceed to view extracted text or grade</Item>
          </Group>
          <Group>
            <Item>Supported file formats: JPEG, PNG, BMP, PDF, and TIFF</Item>
            <Item>
              For PDF and TIFF files, the system currently processes only first
              two pages.
            </Item>
            <Item>
              The file size must be less than 4 MB and dimensions at least 50 x
              50 pixels and at most 10000 x 10000 pixels.
            </Item>
          </Group>
        </List>
      </Instructions>

      <UploadBox section="answer" />
      <UploadBox section="mark" />
      <ButtonContainer>
        {/* <ButtonDiv> */}
        <ViewButton children="View text" path="/texts" />
        {/* <ViewButton children="View text" path="/viewText" /> */}
        {/* </ButtonDiv> */}
        <ViewButton children="View grade" path="/viewGrade" />
      </ButtonContainer>
    </Container>
  );
};
