import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  background: #000;
  color: white;
  min-height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
`;

const BrandName = styled.nav`
  font-size: 1.5rem;
  padding-left: 3vw;
  color: white;
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const NavLinks = styled.ul`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

const LinkItem = styled.li`
  color: white;
  font-size: 1rem;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Nav = () => {
  return (
    <NavBar>
      <Link to="/">
        <BrandName>AI-Grader</BrandName>
      </Link>
      <NavLinks>
        <Link to="/">
          <LinkItem>Home</LinkItem>
        </Link>
        <Link to="/login">
          <LinkItem>Login</LinkItem>
        </Link>
      </NavLinks>
    </NavBar>
  );
};
