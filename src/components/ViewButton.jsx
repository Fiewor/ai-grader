import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ViewButton = ({ children, path }) => {
  return (
    <UploadButton>
      <Link to={path}>{children}</Link>
    </UploadButton>
  );
};

const UploadButton = styled.button`
  background: #959595;
  padding: 0.01rem 1.5rem;
  border: none;
  margin: 0.2rem 0.5rem;
  border-radius: 5px;
  box-shadow: 1px 2px 1px 1px rgb(0, 0, 0);
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
  &:hover {
    cursor: pointer;
    background: #5e5e5e;
  }
  &:active {
    box-shadow: 0px 0px 1px 0px rgb(0, 0, 0);
  }
  a {
    text-decoration: none;
    color: black;
    padding: 0;
    margin: 0;
  }
`;
