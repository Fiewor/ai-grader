import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { reset } from "../features/auth/authSlice";
import { UploadBox, ViewButton } from "../components/index";
import { Container, Instructions, Title, List, Group, Item } from "./TextList";

export const DropArea = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (isError) {
      navigate("/login");
      console.log(message);
      // toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/grade");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

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
      <p>Or proceed to grade existing answer sheet</p>
      <br />
      <UploadBox section="mark" />
      <p>Or procced to use existing marking guide</p>
      <ButtonContainer>
        <ViewButton children="Proceed" path="/all-uploads" />
        {/* <ViewButton children="View text" path="/texts" />
        <ViewButton children="View grade" path="/viewGrade" /> */}
      </ButtonContainer>
    </Container>
  );
};

// * Styled components
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 9vh;
`;
