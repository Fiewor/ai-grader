import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UploadButton = styled.button`
  background: #959595;
  padding: 0.8rem 1.5rem;
  border: none;

  :hover {
    cursor: pointer;
    background: #5e5e5e;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export const ViewButton = () => {
  return (
    <UploadButton>
      <Link to="/viewText">View uploads</Link>
    </UploadButton>
  );
};
