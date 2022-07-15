import React from "react";
import { UploadBox, ViewButton } from "./index";
import { ButtonContainer } from "./DropArea";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Instructions = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Roboto:wght@300&display=swap");
  font-family: "Raleway", sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 2rem 0;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const List = styled.ul`
  list-style: disc url("../icons/check_box_FILL0_wght400_GRAD0_opsz48.png")
    inside;
`;

export const Group = styled.div`
  padding: 1rem 0;
  font-family: "Roboto", sans-serif;
`;

export const Item = styled.li`
  font-size: 0.8rem;
  padding: 0.2rem 0;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const TextExtract = () => {
  return (
    <Container>
      <Instructions>
        <Title>How to use</Title>
        <List>
          <Group>
            <Item>
              Upload image/pdf containing handwritten text using the provided
              interface below.
            </Item>
            <Item>
              This could be a picture or scanned copy of handwritten or printed
              text.
            </Item>
            <Item>
              Wait for alert notification confirming successful upload.
            </Item>
            <Item>
              Wait for another alert notification confirming document saved in
              database.
            </Item>
            <Item>If no, second notification, wait for about 5 minutes.</Item>
            <Item>
              Proceed to <em>View Text</em>.
            </Item>
            <Item>Proceed to view extracted text or grade.</Item>
          </Group>

          <Group>
            <Item>Supported file formats: JPEG, PNG, BMP, PDF, and TIFF.</Item>
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
      <UploadBox section="text" />
      <ButtonContainer>
        <ViewButton children="View text" path="/texts" />
      </ButtonContainer>
    </Container>
  );
};
