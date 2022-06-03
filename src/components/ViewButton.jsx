import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UploadButton = styled.button`
  background: #959595;
  padding: 1rem 1.5rem;
  border: none;
  margin: 0.2rem;

  :hover {
    cursor: pointer;
    background: #5e5e5e;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export const ViewButton = ({ children, path }) => {
  return (
    <UploadButton>
      <Link to={path}>{children}</Link>
    </UploadButton>
  );
};
