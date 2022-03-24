import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UploadButton = styled.button`
  background: rgb(255, 0, 0);
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  box-shadow: -3px -2px 5px 1px black;
  text-decoration: none;

  :hover {
    cursor: pointer;
    background: rgb(206, 8, 8);
  }

  :active {
    box-shadow: -2px -2px 5px 1px black;
  }
`;

export const ViewButton = () => {
  return (
    <Link to="/viewText">
      <UploadButton>View uploads</UploadButton>
    </Link>
  );
};
